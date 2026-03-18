import React from "react";
import { useNavigate } from "react-router-dom";
import "./GradeSelect.css";

function GradeSelect() {
  const navigate = useNavigate();

  const saveGradeAndContinue = (grade) => {
    document.cookie = `userGrade=${grade}; path=/; max-age=${60 * 60 * 24 * 30}`;
    navigate("/dashboard");
  };

  return (
    <section className="grade-select-page">

  {/* FLOATING BACKGROUND */}
  <div className="float circle f1"></div>
  <div className="float circle f2"></div>
  <div className="float circle f3"></div>
  <div className="float circle f4"></div>
  <div className="float circle f5"></div>

  <div className="float dollar d1">💰</div>
  <div className="float dollar d2">💵</div>
  <div className="float dollar d3">💲</div>
  <div className="float dollar d4">💸</div>

  {/* 🔥 NEW CONTENT WRAPPER */}
  <div className="content-layer">
    <div className="grade-card">
      <h1>🐻 PennyPals 🐻</h1>

      <p className="grade-question">
        Pick your grade! 🎮
      </p>

      <div className="grade-buttons">
        <button onClick={() => saveGradeAndContinue("4")}>🎒 Grade 4</button>
        <button onClick={() => saveGradeAndContinue("5")}>📚 Grade 5</button>
        <button onClick={() => saveGradeAndContinue("6")}>🚀 Grade 6</button>
      </div>
    </div>
  </div>

</section>
  );
}

export default GradeSelect;