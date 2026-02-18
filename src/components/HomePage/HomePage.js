import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [user, setUser] = useState(null);

  // (Optional) placeholder game stats (swap with Firestore later)
  const [coins] = useState(120);
  const [streak] = useState(3);
  const [level] = useState(2);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Logged OUT: fun landing page
  if (!user) {
    return (
      <div className="pp-wrap">
        <div className="pp-landing">
          <div className="pp-bubble pp-bubble-1" />
          <div className="pp-bubble pp-bubble-2" />
          <div className="pp-bubble pp-bubble-3" />

          <h1 className="pp-title">PennyPals 🐷✨</h1>
          <p className="pp-subtitle">
            Learn money choices through mini-games, earn coins, and take care of your pet!
          </p>

          <div className="pp-cta-row">
            <Link to="/sign-in" className="pp-btn pp-btn-primary">
              Sign In
            </Link>
            <Link to="/sign-up" className="pp-btn pp-btn-secondary">
              Create Account
            </Link>
          </div>

          <div className="pp-card pp-preview">
            <div className="pp-preview-item">
              <div className="pp-emoji">🪙</div>
              <div>
                <div className="pp-preview-title">Earn Coins</div>
                <div className="pp-preview-text">Get rewards for good choices.</div>
              </div>
            </div>

            <div className="pp-preview-item">
              <div className="pp-emoji">🐾</div>
              <div>
                <div className="pp-preview-title">Raise a Pet</div>
                <div className="pp-preview-text">Feed, heal, and dress your buddy.</div>
              </div>
            </div>

            <div className="pp-preview-item">
              <div className="pp-emoji">🏆</div>
              <div>
                <div className="pp-preview-title">Win Badges</div>
                <div className="pp-preview-text">Build streaks and unlock rewards.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Logged IN: Dashboard
  const nickname = user.email?.split("@")[0] || "Explorer";

  return (
    <div className="pp-wrap">
      <div className="pp-dashboard">
        <header className="pp-hero">
          <div>
            <h1 className="pp-title">Hi {nickname}! 🌟</h1>
            <p className="pp-subtitle">Ready for a quick money mission?</p>
          </div>

          <div className="pp-stats">
            <div className="pp-stat">
              <span className="pp-stat-icon">🪙</span>
              <div>
                <div className="pp-stat-label">Coins</div>
                <div className="pp-stat-value">{coins}</div>
              </div>
            </div>

            <div className="pp-stat">
              <span className="pp-stat-icon">🔥</span>
              <div>
                <div className="pp-stat-label">Streak</div>
                <div className="pp-stat-value">{streak} days</div>
              </div>
            </div>

            <div className="pp-stat">
              <span className="pp-stat-icon">⭐</span>
              <div>
                <div className="pp-stat-label">Level</div>
                <div className="pp-stat-value">{level}</div>
              </div>
            </div>
          </div>
        </header>

        <div className="pp-grid">
          {/* Main action */}
          <section className="pp-card pp-big">
            <div className="pp-card-title">Continue Adventure 🚀</div>
            <p className="pp-card-text">
              Jump back into your next lesson and earn coins!
            </p>
            <button className="pp-btn pp-btn-primary pp-btn-wide">
              Continue
            </button>

            <div className="pp-progress">
              <div className="pp-progress-label">
                Unit Progress <span>40%</span>
              </div>
              <div className="pp-progress-bar">
                <div className="pp-progress-fill" style={{ width: "40%" }} />
              </div>
            </div>
          </section>

          {/* Pet */}
          <section className="pp-card">
            <div className="pp-card-title">My Pet 🐶</div>
            <div className="pp-pet">
              <div className="pp-pet-avatar">🐶</div>
              <div className="pp-pet-info">
                <div className="pp-meter">
                  <div className="pp-meter-top">
                    <span>Hunger</span><span>70%</span>
                  </div>
                  <div className="pp-meter-bar">
                    <div className="pp-meter-fill" style={{ width: "70%" }} />
                  </div>
                </div>

                <div className="pp-meter">
                  <div className="pp-meter-top">
                    <span>Health</span><span>85%</span>
                  </div>
                  <div className="pp-meter-bar">
                    <div className="pp-meter-fill" style={{ width: "85%" }} />
                  </div>
                </div>
              </div>
            </div>

            <Link to="/pet-shop" className="pp-btn pp-btn-secondary pp-btn-wide">
              Go to Pet Shop 🛍️
            </Link>
          </section>

          {/* Missions */}
          <section className="pp-card pp-span">
            <div className="pp-card-title">Mini Missions 🎯</div>

            <div className="pp-missions">
              <button className="pp-mission">
                <div className="pp-mission-left">
                  <div className="pp-mission-emoji">⚡</div>
                  <div>
                    <div className="pp-mission-title">Quick Quiz</div>
                    <div className="pp-mission-text">2 minutes</div>
                  </div>
                </div>
                <div className="pp-mission-reward">+10 🪙</div>
              </button>

              <button className="pp-mission">
                <div className="pp-mission-left">
                  <div className="pp-mission-emoji">🛒</div>
                  <div>
                    <div className="pp-mission-title">Needs vs Wants</div>
                    <div className="pp-mission-text">Sort items</div>
                  </div>
                </div>
                <div className="pp-mission-reward">+8 🪙</div>
              </button>

              <button className="pp-mission">
                <div className="pp-mission-left">
                  <div className="pp-mission-emoji">🧩</div>
                  <div>
                    <div className="pp-mission-title">Fill in the Blank</div>
                    <div className="pp-mission-text">Finish the sentence</div>
                  </div>
                </div>
                <div className="pp-mission-reward">+6 🪙</div>
              </button>
            </div>
          </section>

          {/* Badges */}
          <section className="pp-card">
            <div className="pp-card-title">Badges 🏆</div>
            <div className="pp-badges">
              <div className="pp-badge unlocked">🌟</div>
              <div className="pp-badge unlocked">🐷</div>
              <div className="pp-badge locked">🔒</div>
              <div className="pp-badge locked">🔒</div>
            </div>
            <div className="pp-card-text">
              Next badge: <b>Saver Star</b> (Complete 2 more lessons)
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;