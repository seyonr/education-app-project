import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGradeCookie } from "../../cookieUtils";
import { useCoins } from "../../coinUtils";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [grade, setGrade] = useState(null);
  const [coins] = useCoins();

  useEffect(() => {
    const savedGrade = getGradeCookie();
    if (!savedGrade) navigate("/");
    else setGrade(savedGrade);
  }, [navigate]);

  const changeGrade = () => {
    // 🔥 CLEAR COOKIE
    document.cookie = "userGrade=; path=/; max-age=0";

    // 🔥 REDIRECT BACK
    navigate("/");
  };

  if (!grade) return null;

  return (
    <div className="home-shell">

      {/* 🎉 Floating emojis */}
      <div className="floating-emoji e1">💰</div>
      <div className="floating-emoji e2">🎁</div>
      <div className="floating-emoji e3">💎</div>

      <div className="floating-emoji e4">⭐</div>
      <div className="floating-emoji e5">💵</div>

      <div className="floating-emoji e6">💸</div>
      <div className="floating-emoji e7">🪙</div>
      <div className="floating-emoji e8">⭐</div>

      <div className="floating-emoji e9">💰</div>
      <div className="floating-emoji e10">🎁</div>

      <div className="floating-emoji e11">💰</div>
      <div className="floating-emoji e12">💎</div>

      <div className="floating-emoji e13">⭐</div>

      <div className="floating-emoji e14">🪙</div>

      <div className="floating-emoji e15">💸</div>

      {/* 🔥 TOP BAR */}
      <div className="top-bar">
        <h2>Hi there! 👋</h2>
        <p>Let’s earn some coins today! 💰</p>

        {/* 🔥 NEW BUTTON */}
        <button className="change-grade-btn" onClick={changeGrade}>
          🔄 Change Grade
        </button>
      </div>

      {/* 🐻 PET */}
      <div className="pet-area">
        <div className="pet-placeholder">🐶</div>
      </div>

      {/* 💰 COINS */}
      <div className="coins-display">
        🪙 {coins}
      </div>

      {/* 🎮 ACTION GRID */}
      <div className="action-grid">

        <button className="action-btn blue" onClick={() => navigate(`/units/${grade}`)}>
          <span>📚</span> Lessons
        </button>

        <button className="action-btn green" onClick={() => navigate(`/assessments/${grade}`)}>
          <span>💯</span> Test
        </button>

        <button className="action-btn pink" onClick={() => navigate("/pet-shop")}>
          <span>🎁</span> Shop
        </button>

        <button className="action-btn yellow">
          <span>📈</span> Invest
        </button>

      </div>
    </div>
  );
}

export default HomePage;