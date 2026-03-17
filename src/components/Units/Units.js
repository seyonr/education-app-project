// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import lessonsData from "../../data/lessons";
// import "./Units.css";

// function Units() {

//   const { grade } = useParams();
//   const navigate = useNavigate();

//   // convert "4" → "grade4"
//   const gradeKey = `grade${grade}`;

//   const units = lessonsData[gradeKey];

//   if (!units) {
//     return (
//       <div style={{padding:"40px"}}>
//         <h2>Grade not found</h2>
//         <button onClick={() => navigate("/")}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <section className="units-page">

//       <h1>Choose a Unit</h1>

//       {Object.keys(units).map((unitKey, index) => (
//         <button
//           key={index}
//           onClick={() => navigate(`/lessons/${gradeKey}/${unitKey}`)}
//         >
//           {unitKey.toUpperCase()}
//         </button>
//       ))}

//     </section>
//   );
// }

// export default Units;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import lessonsData from "../../data/lessons";
import "./Units.css";

function Units() {
  const { grade } = useParams();
  const navigate = useNavigate();

  const gradeKey = `grade${grade}`;
  const gradeLabel = grade?.startsWith("grade") ? grade.replace("grade", "") : grade;
  const units = lessonsData[gradeKey];

  if (!units) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Grade not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const unitKeys = Object.keys(units);
  const unitSummaries = unitKeys.map((unitKey) => {
    const totalLessons = units[unitKey].length;
    const progressKey = `progress_${gradeKey}_${unitKey}`;
    const completedLessons = JSON.parse(localStorage.getItem(progressKey)) || [];
    const progressPercent = totalLessons
      ? Math.round((completedLessons.length / totalLessons) * 100)
      : 0;
    return {
      unitKey,
      totalLessons,
      completedLessons: completedLessons.length,
      progressPercent
    };
  });

  const nextUnit = unitSummaries.find((item) => item.progressPercent < 100) || unitSummaries[0];
  const totalLessons = unitSummaries.reduce((sum, item) => sum + item.totalLessons, 0);
  const totalCompleted = unitSummaries.reduce((sum, item) => sum + item.completedLessons, 0);
  const overallPercent = totalLessons ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  return (
    <section className="units-page">
      <div className="units-top">
        <div className="units-hero">
          <div>
            <div className="units-badge">Grade {gradeLabel}</div>
            <h1>Choose a Unit</h1>
            <p>Track your progress and keep building smart money habits.</p>
          </div>
        </div>

        <aside className="units-side">
          {nextUnit && (
            <div className="units-side-card accent">
              <div className="units-side-title">Next Up</div>
              <div className="units-side-main">{nextUnit.unitKey.toUpperCase()}</div>
              <div className="units-side-sub">
                {nextUnit.completedLessons}/{nextUnit.totalLessons} lessons completed
              </div>
              <div className="units-side-progress">
                <div
                  className="units-side-progress-bar"
                  style={{ width: `${nextUnit.progressPercent}%` }}
                />
              </div>
              <button
                className="units-side-button"
                onClick={() => navigate(`/lessons/${gradeKey}/${nextUnit.unitKey}`)}
              >
                Continue Unit
              </button>
            </div>
          )}

          <div className="units-side-card">
            <div className="units-side-title">Overall Progress</div>
            <div className="units-side-main">{overallPercent}%</div>
            <div className="units-side-sub">
              {totalCompleted}/{totalLessons} lessons completed
            </div>
            <div className="units-side-progress">
              <div className="units-side-progress-bar" style={{ width: `${overallPercent}%` }} />
            </div>
            <div className="units-tip">Tip: Compare prices before you buy.</div>
          </div>
        </aside>
      </div>

      <div className="unit-grid">
        {unitSummaries.map((summary) => (
          <button
            key={summary.unitKey}
            className="unit-card"
            onClick={() => navigate(`/lessons/${gradeKey}/${summary.unitKey}`)}
          >
            <div className="unit-card-head">
              <div className="unit-title">{summary.unitKey.toUpperCase()}</div>
              <div className="unit-progress-pill">{summary.progressPercent}%</div>
            </div>

            <div className="unit-meta">
              {summary.completedLessons}/{summary.totalLessons} lessons completed
            </div>

            <div className="unit-progress">
              <div className="unit-progress-bar" style={{ width: `${summary.progressPercent}%` }} />
            </div>

            <div className="unit-footer">
              <span>Continue</span>
              <span>→</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Units;