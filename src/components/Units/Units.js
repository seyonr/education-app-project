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
  const units = lessonsData[gradeKey];

  if (!units) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Grade not found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <section className="units-page">
      <h1>Choose a Unit</h1>

      {Object.keys(units).map((unitKey, index) => {
        const totalLessons = units[unitKey].length;
        const progressKey = `progress_${gradeKey}_${unitKey}`;
        const completedLessons = JSON.parse(localStorage.getItem(progressKey)) || [];
        const progressPercent = (completedLessons.length / totalLessons) * 100;

        return (
          <div
            key={index}
            style={{
              width: "320px",
              background: "white",
              padding: "16px",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              marginBottom: "16px",
              cursor: "pointer"
            }}
            onClick={() => navigate(`/lessons/${gradeKey}/${unitKey}`)}
          >
            <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
              {unitKey.toUpperCase()}
            </div>

            <div style={{ marginBottom: "8px", fontSize: "14px" }}>
              {completedLessons.length}/{totalLessons} lessons done
            </div>

            <div
              style={{
                width: "100%",
                height: "14px",
                background: "#e5e7eb",
                borderRadius: "999px",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: "100%",
                  background: "#A78BFA",
                  borderRadius: "999px"
                }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Units;