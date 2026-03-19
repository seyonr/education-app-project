// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getGradeCookie } from "../../cookieUtils";
// import { useCoins } from "../../coinUtils";
// import "./HomePage.css";

// function HomePage() {
//   const navigate = useNavigate();
//   const [grade, setGrade] = useState(null);
//   const [coins] = useCoins();

//   useEffect(() => {
//     const savedGrade = getGradeCookie();
//     if (!savedGrade) navigate("/");
//     else setGrade(savedGrade);
//   }, [navigate]);

//   const changeGrade = () => {
//     document.cookie = "userGrade=; path=/; max-age=0";
//     setGrade(null); // 🔥 FIX
//   };

//   if (!grade) {
//     navigate("/");
//     return null;
//   }

//   return (
//     <div className="home-shell">
//       {/* 🎉 Floating emojis */}
//       <div className="floating-emoji e1">💰</div>
//       <div className="floating-emoji e2">🎁</div>
//       <div className="floating-emoji e3">💎</div>

//       <div className="floating-emoji e4">⭐</div>
//       <div className="floating-emoji e5">💵</div>

//       <div className="floating-emoji e6">💸</div>
//       <div className="floating-emoji e7">🪙</div>
//       <div className="floating-emoji e8">⭐</div>

//       <div className="floating-emoji e9">💰</div>
//       <div className="floating-emoji e10">🎁</div>

//       <div className="floating-emoji e11">💰</div>
//       <div className="floating-emoji e12">💎</div>

//       <div className="floating-emoji e13">⭐</div>
//       <div className="floating-emoji e14">🪙</div>
//       <div className="floating-emoji e15">💸</div>

//       <div className="top-bar">
//         <h2>Hi there! 👋</h2>
//         <p>Let’s earn some coins today! 💰</p>

//         <button className="change-grade-btn" onClick={changeGrade}>
//           🔄 Change Grade
//         </button>
//       </div>

//       <div className="pet-area">
//         <div className="pet-placeholder">🐶</div>
//       </div>

//       <div className="coins-display">
//         🪙 {coins}
//       </div>

//       <div className="action-grid">
//         <button className="action-btn blue" onClick={() => navigate(`/units/${grade}`)}>
//           <span>📚</span> Lessons
//         </button>

//         <button className="action-btn green" onClick={() => navigate(`/assessments/${grade}`)}>
//           <span>💯</span> Test
//         </button>

//         <button className="action-btn pink" onClick={() => navigate("/pet-shop")}>
//           <span>🎁</span> Shop
//         </button>

//         <button className="action-btn yellow" onClick={() => navigate("/investments")}>
//           <span>📈</span> Invest
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGradeCookie } from "../../cookieUtils";
import { useCoins } from "../../coinUtils";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [grade, setGrade] = useState(undefined); // undefined = still checking
  const [coins] = useCoins();

  useEffect(() => {
    const savedGrade = getGradeCookie();
    setGrade(savedGrade || null);
  }, []);

  useEffect(() => {
    // only redirect AFTER cookie check is done
    if (grade === null) {
      navigate("/", { replace: true });
    }
  }, [grade, navigate]);

  const changeGrade = () => {
    document.cookie = "userGrade=; path=/; max-age=0";
    navigate("/", { replace: true, state: { reset: true } });

    // only use this if you STILL see weird routing issues
    // window.location.reload();
  };

  // while checking cookie, render nothing
  if (grade === undefined) {
    return null;
  }

  return (
    <div className="home-shell">
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

      <div className="top-bar">
        <h2>Hi there! 👋</h2>
        <p>Let’s earn some coins today! 💰</p>

        <button className="change-grade-btn" onClick={changeGrade}>
          🔄 Change Grade
        </button>
      </div>

      <div className="pet-area">
        <div className="pet-placeholder">🐶</div>
      </div>

      <div className="coins-display">🪙 {coins}</div>

      <div className="action-grid">
        <button
          className="action-btn blue"
          onClick={() => navigate(`/units/${grade}`)}
        >
          <span>📚</span> Lessons
        </button>

        <button
          className="action-btn green"
          onClick={() => navigate(`/assessments/${grade}`)}
        >
          <span>💯</span> Test
        </button>

        <button className="action-btn pink" onClick={() => navigate("/pet-shop")}>
          <span>🎁</span> Shop
        </button>

        <button className="action-btn yellow" onClick={() => navigate("/investments")}>
          <span>📈</span> Invest
        </button>
      </div>
    </div>
  );
}

export default HomePage;