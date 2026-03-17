import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import lessonsData from "../../data/lessons";
import assessmentsData from "../../data/assessments";

import { getGradeCookie, clearGradeCookie } from "../../cookieUtils";
import { useCoins } from "../../coinUtils";
import "./HomePage.css";

function HomePage() {

  const navigate = useNavigate();
  const [grade, setGrade] = useState(null);
  const [coins] = useCoins();

  const stats = useMemo(() => {
    if (!grade) {
      return { unitCount: 0, lessonCount: 0, quizCount: 0 };
    }

    const gradeKey = `grade${grade}`;
    const gradeLessons = lessonsData[gradeKey] || {};
    const unitKeys = Object.keys(gradeLessons).filter((key) => key.startsWith("unit"));
    const lessonCount = unitKeys.reduce((total, key) => total + (gradeLessons[key]?.length || 0), 0);
    const quizCount = Object.keys(assessmentsData[gradeKey] || {}).length;

    return { unitCount: unitKeys.length, lessonCount, quizCount };
  }, [grade]);

  useEffect(() => {

    const savedGrade = getGradeCookie();

    if (!savedGrade) {
      navigate("/");
    } else {
      setGrade(savedGrade);
    }

  }, [navigate]);

  const changeGrade = () => {
    clearGradeCookie();
    navigate("/");
  };

  const handleInvestmentGameClick = () => {
    if (!grade) return;

    const gradeKey = `grade${grade}`;
    const gameLessons = lessonsData[gradeKey]?.game || [];

    if (gameLessons.length === 0) {
      return;
    }

    const selectedGame = gameLessons[0];
    navigate(`/simulation/${gradeKey}/${selectedGame.id}`);
  };

  if (!grade) {
    return null;
  }

  return (
    <div className="home-shell">
      <section className="home-hero">
        <div className="home-hero-text">
          <div className="home-badge">Grade {grade}</div>
          <h1 className="home-title">PennyPals</h1>
          <p className="home-sub">
            Learn money skills with quests, mini-games, and real-life choices.
          </p>
          <div className="home-hero-actions">
            <button className="home-primary" onClick={() => navigate(`/units/${grade}`)}>
              Start Lessons
            </button>
            <button className="home-secondary" onClick={() => navigate(`/assessments/${grade}`)}>
              Take a Quiz
            </button>
          </div>
        </div>

        <div className="home-hero-card">
          <div className="home-hero-coins">
            <span className="coin-emoji">🪙</span>
            <div>
              <div className="coin-label">Coins</div>
              <div className="coin-value">{coins}</div>
            </div>
          </div>
          <div className="home-stats">
            <div className="home-stat">
              <div className="stat-value">{stats.unitCount}</div>
              <div className="stat-label">Units</div>
            </div>
            <div className="home-stat">
              <div className="stat-value">{stats.lessonCount}</div>
              <div className="stat-label">Lessons</div>
            </div>
            <div className="home-stat">
              <div className="stat-value">{stats.quizCount}</div>
              <div className="stat-label">Quizzes</div>
            </div>
          </div>
          <button className="home-ghost" onClick={changeGrade}>
            Switch Grade
          </button>
        </div>
      </section>

      <section className="home-actions">
        <button className="action-card" onClick={() => navigate(`/units/${grade}`)}>
          <div className="action-emoji">📚</div>
          <div className="action-title">Lessons</div>
          <div className="action-sub">Follow the unit path and unlock badges.</div>
        </button>

        <button className="action-card" onClick={() => navigate(`/assessments/${grade}`)}>
          <div className="action-emoji">📝</div>
          <div className="action-title">Assessments</div>
          <div className="action-sub">Quick quizzes to show what you know.</div>
        </button>

        <button className="action-card" onClick={handleInvestmentGameClick}>
          <div className="action-emoji">📈</div>
          <div className="action-title">Investment Game</div>
          <div className="action-sub">Practice smart choices with coins.</div>
        </button>

        <button className="action-card" onClick={() => navigate("/pet-shop")}
        >
          <div className="action-emoji">🎁</div>
          <div className="action-title">Rewards</div>
          <div className="action-sub">Spend coins on pets and power-ups.</div>
        </button>
      </section>
    </div>
  );
}

export default HomePage;