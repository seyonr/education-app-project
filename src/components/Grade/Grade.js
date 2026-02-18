import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Grade.css";

function Grade() {
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!grade) return;
    navigate(`/units/${grade}`);
  };

  return (
    <section className="grade-page">
      <h1>Tell us about yourself</h1>

      <select value={grade} onChange={(e) => setGrade(e.target.value)}>
        <option value="">Select Grade</option>
        <option value="grade4">Grade 1</option>
        <option value="grade4">Grade 2</option>
        <option value="grade4">Grade 3</option>
        <option value="grade4">Grade 4</option>
        <option value="grade4">Grade 5</option>
        <option value="grade5">Grade 6</option>
      </select>

      <button onClick={handleSubmit}>
        Let’s Go!
      </button>
    </section>
  );
}

export default Grade;
