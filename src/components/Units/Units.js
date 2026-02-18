import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import lessonsData from "../../data/lessons";
import "./Units.css";

function Units() {
  const { grade } = useParams();
  const navigate = useNavigate();

  const units = lessonsData[grade];

  return (
    <section className="units-page">
      <h1>Where should we start?</h1>

      {Object.keys(units).map((unitKey, index) => (
        <button
          key={index}
          onClick={() => navigate(`/lessons/${grade}/${unitKey}`)}
        >
          {unitKey.toUpperCase()}
        </button>
      ))}
    </section>
  );
}

export default Units;
