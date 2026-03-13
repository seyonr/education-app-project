
import React from "react";
import { useNavigate } from "react-router-dom";
import "./GradeSelect.css";



function GradeSelect() {
  const navigate = useNavigate();

  const saveGradeAndContinue = (grade) => {
    // Save grade in a cookie for 30 days
    document.cookie = `userGrade=${grade}; path=/; max-age=${60 * 60 * 24 * 30}`;
    navigate("/dashboard");
  };

  return (
    <section className="grade-select-page">
      <div className="grade-card">
        <h1>Welcome to PennyPals!</h1>
        <p className="grade-subtitle">What grade are you in?</p>

        <div className="grade-buttons">
          <button onClick={() => saveGradeAndContinue("4")}>Grade 4</button>
          <button onClick={() => saveGradeAndContinue("5")}>Grade 5</button>
          <button onClick={() => saveGradeAndContinue("6")}>Grade 6</button>
        </div>
      </div>
    </section>
  );
}

export default GradeSelect;