import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import assessmentsData from "../../data/assessments";
import lessonsData from "../../data/lessons";
import petImage from "../../assets/images/pet.png";
import "./Assessments.css";

function AssessmentsPage() {
  const { grade } = useParams();
  const navigate = useNavigate();

  const gradeKey = grade?.startsWith("grade") ? grade : `grade${grade}`;
  const gradeLabel = gradeKey.replace("grade", "");

  const [petIsBouncing, setPetIsBouncing] = useState(false);
  const [petMessage, setPetMessage] = useState("");

  useEffect(() => {
    setPetMessage("Are you ready? 🎯");
    const timer = window.setTimeout(() => setPetMessage(""), 2800);
    return () => window.clearTimeout(timer);
  }, []);

  const petPrompts = [
    "You got this! 💪",
    "Pick a mission! 🚀",
    "Easy coins here 💰",
    "Ready for today’s quiz? 🎯"
  ];
  const lockedPrompts = [
    "Finish the lesson first! 🔒",
    "Almost there! 📘",
    "Complete the lesson! ✅"
  ];

  const pickMessage = (list) => list[Math.floor(Math.random() * list.length)];
  const handlePetEncourage = () => setPetMessage(pickMessage(petPrompts));
  const handlePetLocked = () => setPetMessage(pickMessage(lockedPrompts));
  const resetPetMessage = () => setPetMessage("");

  const handlePetClick = () => {
    setPetIsBouncing(true);
    window.setTimeout(() => setPetIsBouncing(false), 450);
  };

  const gradeAssessments = assessmentsData[gradeKey];

  if (!gradeAssessments) {
    return (
      <div className="assessment-container">
        <h1 className="assessment-title">Assessments</h1>
        <p className="assessment-subtitle">No assessments found for Grade {grade}.</p>
      </div>
    );
  }

  const units = Object.keys(gradeAssessments);
  const unitMeta = {
    unit1: { title: "Needs vs Wants", subtitle: "", emoji: "🧠" },
    unit2: { title: "Smart Shopping", subtitle: "", emoji: "🛒" },
    unit3: { title: "Saving Goals", subtitle: "", emoji: "🎯" },
    unit4: { title: "Money Moves", subtitle: "", emoji: "💼" },
    unit5: { title: "Money Adventure", subtitle: "", emoji: "⭐" },
    unit6: { title: "Bonus Quest", subtitle: "", emoji: "🚀" }
  };

  return (
    <div className="assessment-container">
      <div className="assessment-hero playful">
        <div>
          <div className="assessment-badge">Grade {gradeLabel}</div>
          <h1 className="assessment-title">Money Missions 🎮</h1>
          <p className="assessment-subtitle">Finish lessons → unlock quizzes → earn coins</p>
        </div>
      </div>

      <div className="assessment-layout minimal">
        <div className="assessment-left">
          {units.map((unit) => {
            const meta = unitMeta[unit] || { title: gradeAssessments[unit].title, subtitle: "", emoji: "✅" };
            const lessons = lessonsData[gradeKey]?.[unit] || [];
            const progressKey = `progress_${gradeKey}_${unit}`;
            const completedLessons = JSON.parse(localStorage.getItem(progressKey)) || [];
            const progressPercent = lessons.length
              ? Math.round((completedLessons.length / lessons.length) * 100)
              : 0;
            const isLocked = lessons.length > 0 && completedLessons.length < lessons.length;
            const rewardText = "+20 coins";
            const unitLabel = `Unit ${unit.replace("unit", "")}`;

            return (
              <button
                key={unit}
                className={`assessment-level-card ${isLocked ? "locked" : ""}`}
                onClick={() => {
                  if (isLocked) {
                    navigate(`/lessons/${gradeKey}/${unit}`);
                    return;
                  }
                  navigate(`/assessment/${grade}/${unit}`);
                }}
                onMouseEnter={() => {
                  if (isLocked) {
                    handlePetLocked();
                    return;
                  }
                  handlePetEncourage();
                }}
                onMouseLeave={resetPetMessage}
              >
                <div className="assessment-level-head">
                  <div className="assessment-level-icon">{meta.emoji}</div>
                  <div>
                    <div className="assessment-level-title">{unitLabel}</div>
                    <div className="assessment-level-sub">{meta.title}</div>
                  </div>
                  <div className="assessment-level-reward">{rewardText}</div>
                </div>
                {isLocked ? (
                  <div className="assessment-level-actions">
                    <span className="assessment-level-lock">🔒 Finish lesson first</span>
                  </div>
                ) : null}
                <div className="assessment-level-progress">
                  <div className="assessment-level-progress-bar" style={{ width: `${progressPercent}%` }} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pet-floating-container">
        {petMessage ? (
          <div className="pet-message" key={petMessage}>{petMessage}</div>
        ) : null}
        <div
          className={`pet-floating-character${petIsBouncing ? " is-bouncing" : ""}`}
          onClick={handlePetClick}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handlePetClick();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Pet mascot"
        >
          <img className="pet-floating-image" src={petImage} alt="Pet mascot" />
          <span className="pet-ground-shadow" aria-hidden="true" />
          <span className="pet-sparkle" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default AssessmentsPage;
