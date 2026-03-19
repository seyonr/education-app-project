import React, { useMemo, useState } from "react";
import "./Investments.css";

function Investments() {
  const startingCoins = 120;
  const goalAmount = 300;

  const [coins, setCoins] = useState(startingCoins);
  const [goalProgress, setGoalProgress] = useState(120);
  const [helperMessage, setHelperMessage] = useState(
    "Penny says: Investing helps your coins grow over time!"
  );
  const [activityLog, setActivityLog] = useState([
    "Welcome to the Pet Future Fund! Pick an investment to get started."
  ]);

  const [portfolio, setPortfolio] = useState({
    savingsNest: 0,
    petBakery: 0,
    toyRocketLab: 0,
  });

  const investments = [
    {
      id: "savingsNest",
      name: "Savings Nest",
      emoji: "🪺",
      risk: "Low",
      description: "A cozy place for your coins to grow slowly and safely.",
      tip: "Safe choices usually grow slowly and steadily.",
    },
    {
      id: "petBakery",
      name: "Pet Bakery",
      emoji: "🧁",
      risk: "Medium",
      description: "Some weeks are busy, some are slower, but it can grow nicely.",
      tip: "Balanced choices can have ups and downs.",
    },
    {
      id: "toyRocketLab",
      name: "Toy Rocket Lab",
      emoji: "🚀",
      risk: "High",
      description: "Big wins are possible, but some weeks can be rough.",
      tip: "Risky choices can win big or lose big.",
    },
  ];

  const investedCoins = portfolio.savingsNest + portfolio.petBakery + portfolio.toyRocketLab;
  const coinsNeeded = Math.max(goalAmount - goalProgress, 0);
  const progressPercent = Math.min((goalProgress / goalAmount) * 100, 100);

  const rank = useMemo(() => {
    if (goalProgress >= 300) return "Pet Investor Pro";
    if (goalProgress >= 220) return "Future Builder";
    if (goalProgress >= 150) return "Smart Saver";
    return "Coin Starter";
  }, [goalProgress]);

  const addLogMessage = (message) => {
    setActivityLog((prev) => [message, ...prev.slice(0, 5)]);
  };

  const investCoins = (investmentId, investmentName, tip) => {
    const amountToInvest = 20;

    if (coins < amountToInvest) {
      setHelperMessage("Penny says: Oops! You do not have enough coins to invest right now.");
      addLogMessage(`You tried to invest in ${investmentName}, but you did not have enough coins.`);
      return;
    }

    setCoins((prev) => prev - amountToInvest);
    setPortfolio((prev) => ({
      ...prev,
      [investmentId]: prev[investmentId] + amountToInvest,
    }));

    setHelperMessage(`Penny says: Great choice! ${tip}`);
    addLogMessage(`You invested 20 coins in ${investmentName}.`);
  };

  const getWeeklyReturn = (investmentId) => {
    if (investmentId === "savingsNest") {
      const outcomes = [5, 6, 8, 10];
      return outcomes[Math.floor(Math.random() * outcomes.length)];
    }

    if (investmentId === "petBakery") {
      const outcomes = [15, 10, 5, 0, -5];
      return outcomes[Math.floor(Math.random() * outcomes.length)];
    }

    if (investmentId === "toyRocketLab") {
      const outcomes = [30, 20, 10, -10, -15];
      return outcomes[Math.floor(Math.random() * outcomes.length)];
    }

    return 0;
  };

  const advanceWeek = () => {
    const activeInvestments = investments.filter((item) => portfolio[item.id] > 0);

    if (activeInvestments.length === 0) {
      setHelperMessage("Penny says: Try investing in one of the cards first!");
      addLogMessage("No investments were active this week.");
      return;
    }

    let totalWeeklyChange = 0;
    const weeklyMessages = [];

    activeInvestments.forEach((item) => {
      const result = getWeeklyReturn(item.id);
      totalWeeklyChange += result;

      if (result >= 0) {
        weeklyMessages.push(`${item.name} grew by +${result} coins this week.`);
      } else {
        weeklyMessages.push(`${item.name} lost ${result} coins this week.`);
      }
    });

    const updatedGoalProgress = Math.max(goalProgress + totalWeeklyChange, 0);

    setGoalProgress(updatedGoalProgress);

    if (totalWeeklyChange > 0) {
      setHelperMessage("Penny says: Nice job! Your coins grew this week!");
    } else if (totalWeeklyChange < 0) {
      setHelperMessage("Penny says: That happens sometimes. Investing can go up and down!");
    } else {
      setHelperMessage("Penny says: This week was steady. Keep going!");
    }

    weeklyMessages.forEach((message) => addLogMessage(message));

    if (updatedGoalProgress >= goalAmount) {
      setHelperMessage("Penny says: Amazing work! You reached your pet goal!");
      addLogMessage("You unlocked the Rainbow Pet House goal! 🎉");
    }
  };

  return (
    <div className="invest-page">
      <div className="invest-hero">
        <div className="invest-hero-text">
          <h1>Pet Future Fund</h1>
          <p>
            Help your pet’s future grow by making smart money choices!
          </p>
          <div className="invest-description">
            Investing means using some of your coins now so they may grow later.
            Some choices are safer, and some are riskier.
          </div>
        </div>

        <div className="invest-mascot-card">
          <div className="invest-mascot">🐶</div>
          <p>{helperMessage}</p>
        </div>
      </div>

      <div className="invest-main-grid">
        <div className="invest-summary-card">
          <h2>My Pet Goal</h2>
          <div className="summary-item">
            <span className="summary-label">Goal</span>
            <span className="summary-value">Rainbow Pet House 🌈</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Available Coins</span>
            <span className="summary-value">{coins} 🪙</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Invested Coins</span>
            <span className="summary-value">{investedCoins} 🏦</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Coins Needed</span>
            <span className="summary-value">{coinsNeeded} 🎯</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Investor Rank</span>
            <span className="summary-value">{rank}</span>
          </div>

          <div className="goal-progress-wrapper">
            <div className="goal-progress-label">
              <span>Goal Progress</span>
              <span>
                {goalProgress} / {goalAmount}
              </span>
            </div>
            <div className="goal-progress-bar">
              <div
                className="goal-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        <div className="invest-cards-area">
          {investments.map((item) => (
            <div
              key={item.id}
              className={`investment-card ${item.id}`}
            >
              <div className="investment-top">
                <div className="investment-emoji">{item.emoji}</div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="investment-meta">
                <span className={`risk-badge ${item.risk.toLowerCase()}`}>
                  {item.risk} Risk
                </span>
                <span className="invested-badge">
                  Invested: {portfolio[item.id]} 🪙
                </span>
              </div>

              <button
                className="invest-btn"
                onClick={() => investCoins(item.id, item.name, item.tip)}
              >
                Invest 20 Coins
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="invest-bottom-grid">
        <div className="week-card">
          <h2>Advance Time</h2>
          <p>
            Click below to see how your investments do this week.
          </p>
          <button className="advance-btn" onClick={advanceWeek}>
            Advance 1 Week ⏭️
          </button>
        </div>

        <div className="updates-card">
          <h2>Investment Updates</h2>
          <div className="updates-list">
            {activityLog.map((item, index) => (
              <div key={index} className="update-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investments;