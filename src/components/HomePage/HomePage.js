import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGradeCookie, clearGradeCookie } from "../../cookieUtils";
import "./HomePage.css";

function HomePage() {

  const navigate = useNavigate();
  const [grade, setGrade] = useState(null);
  const [coins] = useState(120);

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

  if (!grade) {
    return null;
  }

  return (
    <div className="home-container">

      <h1 className="home-title">
        PennyPals 🐷
      </h1>

      <p className="home-sub">
        Grade {grade} Explorer
      </p>

      <div className="coin-box">
        🪙 Coins: {coins}
      </div>

      <div className="home-grid">

        <button
          className="home-btn"
          onClick={() => navigate(`/units/${grade}`)}
        >
          📚 Lessons
        </button>

        <button
          className="home-btn"
          onClick={() => navigate(`/units/${grade}`)}
        >
          📝 Assessments
        </button>

        <button
          className="home-btn"
        >
          📈 Investment Game
        </button>

        <button
          className="home-btn"
          onClick={() => navigate("/pet-shop")}
        >
          🎁 Rewards
        </button>

      </div>

      <button className="change-grade" onClick={changeGrade}>
        Change Grade
      </button>

    </div>
  );
}

export default HomePage;