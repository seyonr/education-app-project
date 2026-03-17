import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import assessmentsData from "../../data/assessments";
import "./Assessments.css";

function AssessmentsPage() {
  const { grade } = useParams();
  const navigate = useNavigate();

  const gradeKey = grade?.startsWith("grade") ? grade : `grade${grade}`;
  const gradeLabel = gradeKey.replace("grade", "");
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
  const totalQuestions = units.reduce(
    (sum, unit) => sum + (gradeAssessments[unit]?.questions.length || 0),
    0
  );
  const unitEmojis = {
    unit1: "🧠",
    unit2: "🛒",
    unit3: "🎯",
    unit4: "💼",
    unit5: "⭐",
    unit6: "🚀"
  };

  const getHistory = (unitKey) => {
    const historyKey = `assessment_${gradeKey}_${unitKey}`;
    const raw = localStorage.getItem(historyKey);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  };

  const overall = units.reduce(
    (acc, unit) => {
      const history = getHistory(unit);
      acc.attempts += history.length;
      const bestAttempt = history.reduce((best, item) => {
        if (!best || item.score > best.score) return item;
        return best;
      }, null);
      if (bestAttempt) {
        const percent = Math.round((bestAttempt.score / bestAttempt.total) * 100);
        acc.bestPercent = Math.max(acc.bestPercent, percent);
      }
      return acc;
    },
    { attempts: 0, bestPercent: 0 }
  );

  return (
    <div className="assessment-container">
      <div className="assessment-layout">
        <div className="assessment-main">
          <div className="assessment-hero">
            <div>
              <h1 className="assessment-title">Grade {gradeLabel} Assessments</h1>
              <p className="assessment-subtitle">Pick a unit to start a quiz.</p>
            </div>
            <div className="assessment-hero-stats">
              <div className="assessment-stat">
                <div className="assessment-stat-value">{units.length}</div>
                <div className="assessment-stat-label">Units</div>
              </div>
              <div className="assessment-stat">
                <div className="assessment-stat-value">{totalQuestions}</div>
                <div className="assessment-stat-label">Questions</div>
              </div>
              <div className="assessment-stat">
                <div className="assessment-stat-value">{overall.bestPercent}%</div>
                <div className="assessment-stat-label">Best</div>
              </div>
            </div>
          </div>

          <div className="assessment-grid">
            {units.map((unit) => {
              const history = getHistory(unit);
              const lastAttempt = history[history.length - 1];
              const bestAttempt = history.reduce((best, item) => {
                if (!best || item.score > best.score) return item;
                return best;
              }, null);
              const questionCount = gradeAssessments[unit].questions.length;
              const emoji = unitEmojis[unit] || "✅";

              return (
                <button
                  key={unit}
                  className="assessment-card"
                  onClick={() => navigate(`/assessment/${grade}/${unit}`)}
                >
                  <div className="assessment-card-head">
                    <div className="assessment-card-emoji">{emoji}</div>
                    <div>
                      <div className="assessment-card-title">{gradeAssessments[unit].title}</div>
                      <div className="assessment-card-sub">{unit.toUpperCase()}</div>
                    </div>
                  </div>
                  <div className="assessment-card-meta">{questionCount} questions</div>
                  <div className="assessment-card-stats">
                    {lastAttempt ? (
                      <span className="assessment-chip">Last {lastAttempt.score}/{lastAttempt.total}</span>
                    ) : (
                      <span className="assessment-chip muted">No attempts yet</span>
                    )}
                    {bestAttempt && (
                      <span className="assessment-chip">Best {bestAttempt.score}/{bestAttempt.total}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <aside className="assessment-side">
          <div className="assessment-side-card accent">
            <div className="assessment-side-title">How It Works</div>
            <ol className="assessment-steps">
              <li>Pick a unit quiz.</li>
              <li>Answer all 10 questions.</li>
              <li>Earn coins for strong scores.</li>
            </ol>
          </div>

          <div className="assessment-side-card">
            <div className="assessment-side-title">Your Progress</div>
            <div className="assessment-side-main">{overall.attempts} attempts</div>
            <div className="assessment-side-sub">Keep practicing to raise your best score.</div>
            <div className="assessment-side-badge">Up to 20 coins per quiz</div>
          </div>

          <div className="assessment-side-card">
            <div className="assessment-side-title">Quick Tip</div>
            <div className="assessment-side-main">Read each choice carefully.</div>
            <div className="assessment-side-sub">Think about needs, goals, and smart plans.</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default AssessmentsPage;
