import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import lessonsData from "../../data/lessons";
import "./Units.css";

function Units() {

  const { grade } = useParams();
  const navigate = useNavigate();

  // convert "4" → "grade4"
  const gradeKey = `grade${grade}`;

  const units = lessonsData[gradeKey];

  if (!units) {
    return (
      <div style={{padding:"40px"}}>
        <h2>Grade not found</h2>
        <button onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="units-page">

      <h1>Choose a Unit</h1>

      {Object.keys(units).map((unitKey, index) => (
        <button
          key={index}
          onClick={() => navigate(`/lessons/${gradeKey}/${unitKey}`)}
        >
          {unitKey.toUpperCase()}
        </button>
      ))}

    </section>
  );
}

export default Units;