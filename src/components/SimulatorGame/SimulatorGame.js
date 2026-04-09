// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import gameData from "../../data/game.js";
// import "./SimulatorGame.css";

// function SimulatorGame() {
//   const navigate = useNavigate();
//   const { grade, gameId } = useParams();

//   const gameLessons = lessonsData[grade]?.game || [];
//   const lesson = gameLessons.find((item) => item.id === Number(gameId));

//   const goal = lesson?.goal?.item || "Bike";
//   const goalCost = lesson?.goal?.cost || 50;

//   const startingMoney = lesson?.startingMoney || 0;
//   const startingFun = lesson?.startingFun ?? 6;
//   const targetFun = lesson?.targetFun ?? 7;

//   const MAX_FUN = 12;
//   const actions = lesson?.actions || [];

//   const storageKey = `savingLessonState-${grade}-${gameId}-v2`;

//   const clampFun = (value) => Math.max(0, Math.min(MAX_FUN, value));

//   function getActionWeight(action, counts) {
//     const used = counts[action.text] ?? 0;
//     const baseWeight = action.weight ?? 3;
//     return Math.max(0.8, baseWeight - used * 0.6);
//   }

//   function pickWeightedRandom(pool, counts) {
//     if (pool.length === 0) return null;

//     const weightedPool = pool.map((action) => ({
//       action,
//       weight: getActionWeight(action, counts),
//     }));

//     const totalWeight = weightedPool.reduce((sum, item) => sum + item.weight, 0);
//     let random = Math.random() * totalWeight;

//     for (const item of weightedPool) {
//       random -= item.weight;
//       if (random <= 0) {
//         return item.action;
//       }
//     }

//     return weightedPool[weightedPool.length - 1].action;
//   }

//   function getBalancedChoices(counts) {
//     const moneyActions = actions.filter(
//       (action) =>
//         action.saveAmount !== undefined || action.earnAmount !== undefined
//     );

//     const funActions = actions.filter(
//       (action) => action.spendAmount !== undefined
//     );

//     const chosen = [];

//     const moneyPick = pickWeightedRandom(moneyActions, counts);
//     if (moneyPick) chosen.push(moneyPick);

//     const remainingFun = funActions.filter(
//       (action) => !chosen.find((item) => item.text === action.text)
//     );

//     const funPick = pickWeightedRandom(remainingFun, counts);
//     if (funPick) chosen.push(funPick);

//     const remainingAll = actions.filter(
//       (action) => !chosen.find((item) => item.text === action.text)
//     );

//     const extraPick = pickWeightedRandom(remainingAll, counts);
//     if (extraPick) chosen.push(extraPick);

//     while (chosen.length < 3) {
//       const leftovers = actions.filter(
//         (action) => !chosen.find((item) => item.text === action.text)
//       );

//       if (leftovers.length === 0) break;

//       const nextPick = pickWeightedRandom(leftovers, counts);
//       if (!nextPick) break;

//       chosen.push(nextPick);
//     }

//     return chosen;
//   }

//   function getInitialState() {
//     if (!lesson) {
//       return {
//         savedMoney: 0,
//         funLevel: 0,
//         round: 1,
//         usedCounts: {},
//         currentChoices: [],
//         feedback: "Simulation game not found.",
//         goalCost: 0,
//         startingMoney: 0,
//         startingFun: 0,
//         targetFun: 0,
//       };
//     }

//     try {
//       const savedGame = localStorage.getItem(storageKey);

//       if (savedGame) {
//         const parsed = JSON.parse(savedGame);

//         const lessonChanged =
//           parsed.goalCost !== goalCost ||
//           parsed.startingMoney !== startingMoney ||
//           parsed.startingFun !== startingFun ||
//           parsed.targetFun !== targetFun;

//         if (!lessonChanged) {
//           return parsed;
//         }
//       }
//     } catch (error) {
//       console.error("Failed to load saved lesson state:", error);
//     }

//     return {
//       savedMoney: startingMoney,
//       funLevel: startingFun,
//       round: 1,
//       usedCounts: {},
//       currentChoices: getBalancedChoices({}),
//       feedback: "Choose one action.",
//       goalCost,
//       startingMoney,
//       startingFun,
//       targetFun,
//     };
//   }

//   const initialState = getInitialState();

//   const [savedMoney, setSavedMoney] = useState(initialState.savedMoney);
//   const [funLevel, setFunLevel] = useState(initialState.funLevel);
//   const [feedback, setFeedback] = useState(
//     initialState.feedback || "Choose one action."
//   );
//   const [round, setRound] = useState(initialState.round);
//   const [hasChosen, setHasChosen] = useState(false);
//   const [selectedActionText, setSelectedActionText] = useState("");
//   const [usedCounts, setUsedCounts] = useState(initialState.usedCounts);
//   const [currentChoices, setCurrentChoices] = useState(initialState.currentChoices);

//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [pendingAction, setPendingAction] = useState(null);

//   useEffect(() => {
//     if (!lesson) return;

//     try {
//       const gameState = {
//         savedMoney,
//         funLevel,
//         round,
//         usedCounts,
//         currentChoices,
//         feedback,
//         goalCost,
//         startingMoney,
//         startingFun,
//         targetFun,
//       };

//       localStorage.setItem(storageKey, JSON.stringify(gameState));
//     } catch (error) {
//       console.error("Failed to save lesson state:", error);
//     }
//   }, [
//     lesson,
//     savedMoney,
//     funLevel,
//     round,
//     usedCounts,
//     currentChoices,
//     feedback,
//     goalCost,
//     startingMoney,
//     startingFun,
//     targetFun,
//     storageKey,
//   ]);

//   if (!lesson) {
//     return <h2>Simulation game not found</h2>;
//   }

//   const moneyProgress = Math.min((savedMoney / goalCost) * 100, 100);
//   const funProgress = Math.min((funLevel / MAX_FUN) * 100, 100);
//   const funTargetPercent = (targetFun / MAX_FUN) * 100;

//   const moneyReached = savedMoney >= goalCost;
//   const funReached = funLevel >= targetFun;
//   const isFinished = moneyReached && funReached;

//   function buildActionMessage(action) {
//     let moneyText = "";

//     if (action.saveAmount !== undefined) moneyText = `Saved $${action.saveAmount}`;
//     if (action.earnAmount !== undefined) moneyText = `Earned $${action.earnAmount}`;
//     if (action.spendAmount !== undefined) moneyText = `Spent $${action.spendAmount}`;

//     let funText = "";

//     if (action.funChange > 0) funText = ` Fun +${action.funChange}`;
//     else if (action.funChange < 0) funText = ` Fun ${action.funChange}`;

//     return `${moneyText}${funText}`;
//   }

//   function handleAction(action) {
//     if (hasChosen || isFinished || showPopup) return;

//     setPendingAction(action);
//     setPopupMessage(buildActionMessage(action));
//     setShowPopup(true);
//   }

//   function handlePopupBack() {
//     setPendingAction(null);
//     setPopupMessage("");
//     setShowPopup(false);
//   }

//   function handlePopupOk() {
//     if (!pendingAction) {
//       setShowPopup(false);
//       return;
//     }

//     const action = pendingAction;

//     let newSaved = savedMoney;
//     let newFun = funLevel;

//     if (action.saveAmount !== undefined) newSaved += action.saveAmount;
//     if (action.earnAmount !== undefined) newSaved += action.earnAmount;

//     if (action.spendAmount !== undefined) {
//       newSaved -= action.spendAmount;
//       if (newSaved < 0) newSaved = 0;
//     }

//     if (action.funChange !== undefined) {
//       newFun = clampFun(newFun + action.funChange);
//     }

//     setSavedMoney(newSaved);
//     setFunLevel(newFun);
//     setSelectedActionText(action.text);
//     setHasChosen(true);

//     setUsedCounts((prev) => ({
//       ...prev,
//       [action.text]: (prev[action.text] ?? 0) + 1,
//     }));

//     setFeedback(buildActionMessage(action));

//     setPendingAction(null);
//     setPopupMessage("");
//     setShowPopup(false);
//   }

//   function nextRound() {
//     const updatedCounts = {
//       ...usedCounts,
//       [selectedActionText]: (usedCounts[selectedActionText] ?? 0),
//     };

//     setRound((prev) => prev + 1);
//     setHasChosen(false);
//     setSelectedActionText("");
//     setFeedback("Choose one action.");
//     setCurrentChoices(getBalancedChoices(updatedCounts));
//   }

//   function handleFinish() {
//     localStorage.removeItem(storageKey);
//     navigate("/dashboard");
//   }

//   return (
//     <div className="saving-lesson-container">
//       <div className="top-bar">
//         <p className="saving-lesson-title">{lesson.title}</p>

//         <div className="fun-meter-mini">
//           <p className="fun-meter-label">Fun Meter</p>

//           <div className="fun-track">
//             <div
//               className={`fun-fill ${funReached ? "fun-good" : "fun-low"}`}
//               style={{ width: `${funProgress}%` }}
//             />

//             <div
//               className="fun-target"
//               style={{ left: `${funTargetPercent}%` }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="saving-goal-box">
//         <h2>🐷 Save for your {goal}</h2>
//         <p>Goal: ${goalCost}</p>
//         <p>Saved: ${savedMoney}</p>
//         <p>You still need: ${Math.max(goalCost - savedMoney, 0)}</p>
//       </div>

//       <div className="meter-section">
//         <div className="meter-card">
//           <div className="meter-header">
//             <span>💰 Money Goal</span>
//             <span>
//               ${savedMoney} / ${goalCost}
//             </span>
//           </div>

//           <div className="saving-progress-border">
//             <div
//               className="saving-progress-fill"
//               style={{ width: `${moneyProgress}%` }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="saving-piggy-area">
//         <img
//           src="https://pngimg.com/d/piggy_bank_PNG56.png"
//           alt="Piggy Bank"
//           className="saving-piggy-img"
//         />
//       </div>

//       <div className="saving-feedback-box">
//         <p>{feedback}</p>
//       </div>

//       {!isFinished && (
//         <>
//           <p className="saving-round-text">Round {round}</p>

//           <div className="saving-actions-grid">
//             {currentChoices.map((action, index) => (
//               <button
//                 key={`${action.text}-${index}`}
//                 className={`saving-action-card ${
//                   selectedActionText === action.text ? "saving-selected-card" : ""
//                 }`}
//                 onClick={() => handleAction(action)}
//                 disabled={hasChosen || showPopup}
//               >
//                 <img
//                   src={action.img}
//                   alt={action.text}
//                   className="saving-action-img"
//                 />

//                 <p className="saving-action-title">{action.text}</p>

//                 {action.saveAmount !== undefined && (
//                   <p className="saving-action-money">Save +${action.saveAmount}</p>
//                 )}

//                 {action.earnAmount !== undefined && (
//                   <p className="saving-action-money">Earn +${action.earnAmount}</p>
//                 )}

//                 {action.spendAmount !== undefined && (
//                   <p className="saving-action-money">Spend -${action.spendAmount}</p>
//                 )}

//                 {action.funChange !== undefined && (
//                   <p
//                     className={`saving-action-fun ${
//                       action.funChange > 0 ? "fun-positive" : "fun-negative"
//                     }`}
//                   >
//                     Fun {action.funChange > 0 ? `+${action.funChange}` : action.funChange}
//                   </p>
//                 )}
//               </button>
//             ))}
//           </div>

//           {hasChosen && (
//             <button className="saving-finish-btn" onClick={nextRound}>
//               Next Round
//             </button>
//           )}
//         </>
//       )}

//       {isFinished && (
//         <div className="saving-result-box">
//           <h3>You reached both goals 🎉</h3>

//           <button className="saving-finish-btn" onClick={handleFinish}>
//             Finish
//           </button>
//         </div>
//       )}

//       {showPopup && (
//         <div className="saving-popup-overlay">
//           <div className="saving-popup-box">
//             <h3 className="saving-popup-title">Warning</h3>
//             <p className="saving-popup-text">{popupMessage}</p>

//             <div className="saving-popup-actions">
//               <button
//                 className="saving-popup-btn saving-popup-back-btn"
//                 onClick={handlePopupBack}
//               >
//                 Back
//               </button>

//               <button
//                 className="saving-popup-btn"
//                 onClick={handlePopupOk}
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SimulatorGame;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gameData from "../../data/game.js";
import "./SimulatorGame.css";

function SimulatorGame() {
  const navigate = useNavigate();

  // Always use the first simulator game
  const lesson = gameData?.game?.[0];

  const goal = lesson?.goal?.item || "Bike";
  const goalCost = lesson?.goal?.cost || 50;

  const startingMoney = lesson?.startingMoney || 0;
  const startingFun = lesson?.startingFun ?? 6;
  const targetFun = lesson?.targetFun ?? 7;

  const MAX_FUN = 12;
  const actions = lesson?.actions || [];

  const storageKey = "savingLessonState-single-game-v2";

  const clampFun = (value) => Math.max(0, Math.min(MAX_FUN, value));

  function getActionWeight(action, counts) {
    const used = counts[action.text] ?? 0;
    const baseWeight = action.weight ?? 3;
    return Math.max(0.8, baseWeight - used * 0.6);
  }

  function pickWeightedRandom(pool, counts) {
    if (pool.length === 0) return null;

    const weightedPool = pool.map((action) => ({
      action,
      weight: getActionWeight(action, counts),
    }));

    const totalWeight = weightedPool.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;

    for (const item of weightedPool) {
      random -= item.weight;
      if (random <= 0) {
        return item.action;
      }
    }

    return weightedPool[weightedPool.length - 1].action;
  }

  function getBalancedChoices(counts) {
    const moneyActions = actions.filter(
      (action) =>
        action.saveAmount !== undefined || action.earnAmount !== undefined
    );

    const funActions = actions.filter(
      (action) => action.spendAmount !== undefined
    );

    const chosen = [];

    const moneyPick = pickWeightedRandom(moneyActions, counts);
    if (moneyPick) chosen.push(moneyPick);

    const remainingFun = funActions.filter(
      (action) => !chosen.find((item) => item.text === action.text)
    );

    const funPick = pickWeightedRandom(remainingFun, counts);
    if (funPick) chosen.push(funPick);

    const remainingAll = actions.filter(
      (action) => !chosen.find((item) => item.text === action.text)
    );

    const extraPick = pickWeightedRandom(remainingAll, counts);
    if (extraPick) chosen.push(extraPick);

    while (chosen.length < 3) {
      const leftovers = actions.filter(
        (action) => !chosen.find((item) => item.text === action.text)
      );

      if (leftovers.length === 0) break;

      const nextPick = pickWeightedRandom(leftovers, counts);
      if (!nextPick) break;

      chosen.push(nextPick);
    }

    return chosen;
  }

  function getInitialState() {
    if (!lesson) {
      return {
        savedMoney: 0,
        funLevel: 0,
        round: 1,
        usedCounts: {},
        currentChoices: [],
        feedback: "Simulation game not found.",
        goalCost: 0,
        startingMoney: 0,
        startingFun: 0,
        targetFun: 0,
      };
    }

    try {
      const savedGame = localStorage.getItem(storageKey);

      if (savedGame) {
        const parsed = JSON.parse(savedGame);

        const lessonChanged =
          parsed.goalCost !== goalCost ||
          parsed.startingMoney !== startingMoney ||
          parsed.startingFun !== startingFun ||
          parsed.targetFun !== targetFun;

        if (!lessonChanged) {
          return parsed;
        }
      }
    } catch (error) {
      console.error("Failed to load saved lesson state:", error);
    }

    return {
      savedMoney: startingMoney,
      funLevel: startingFun,
      round: 1,
      usedCounts: {},
      currentChoices: getBalancedChoices({}),
      feedback: "Choose one action.",
      goalCost,
      startingMoney,
      startingFun,
      targetFun,
    };
  }

  const initialState = getInitialState();

  const [savedMoney, setSavedMoney] = useState(initialState.savedMoney);
  const [funLevel, setFunLevel] = useState(initialState.funLevel);
  const [feedback, setFeedback] = useState(
    initialState.feedback || "Choose one action."
  );
  const [round, setRound] = useState(initialState.round);
  const [hasChosen, setHasChosen] = useState(false);
  const [selectedActionText, setSelectedActionText] = useState("");
  const [usedCounts, setUsedCounts] = useState(initialState.usedCounts);
  const [currentChoices, setCurrentChoices] = useState(
    initialState.currentChoices
  );

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [pendingAction, setPendingAction] = useState(null);

  useEffect(() => {
    if (!lesson) return;

    try {
      const gameState = {
        savedMoney,
        funLevel,
        round,
        usedCounts,
        currentChoices,
        feedback,
        goalCost,
        startingMoney,
        startingFun,
        targetFun,
      };

      localStorage.setItem(storageKey, JSON.stringify(gameState));
    } catch (error) {
      console.error("Failed to save lesson state:", error);
    }
  }, [
    lesson,
    savedMoney,
    funLevel,
    round,
    usedCounts,
    currentChoices,
    feedback,
    goalCost,
    startingMoney,
    startingFun,
    targetFun,
  ]);

  if (!lesson) {
    return <h2>Simulation game not found</h2>;
  }

  const moneyProgress = Math.min((savedMoney / goalCost) * 100, 100);
  const funProgress = Math.min((funLevel / MAX_FUN) * 100, 100);
  const funTargetPercent = (targetFun / MAX_FUN) * 100;

  const moneyReached = savedMoney >= goalCost;
  const funReached = funLevel >= targetFun;
  const isFinished = moneyReached && funReached;

  function buildActionMessage(action) {
    let moneyText = "";

    if (action.saveAmount !== undefined) moneyText = `Saved $${action.saveAmount}`;
    if (action.earnAmount !== undefined) moneyText = `Earned $${action.earnAmount}`;
    if (action.spendAmount !== undefined) moneyText = `Spent $${action.spendAmount}`;

    let funText = "";

    if (action.funChange > 0) funText = ` Fun +${action.funChange}`;
    else if (action.funChange < 0) funText = ` Fun ${action.funChange}`;

    return `${moneyText}${funText}`;
  }

  function handleAction(action) {
    if (hasChosen || isFinished || showPopup) return;

    setPendingAction(action);
    setPopupMessage(buildActionMessage(action));
    setShowPopup(true);
  }

  function handlePopupBack() {
    setPendingAction(null);
    setPopupMessage("");
    setShowPopup(false);
  }

  function handlePopupOk() {
    if (!pendingAction) {
      setShowPopup(false);
      return;
    }

    const action = pendingAction;

    let newSaved = savedMoney;
    let newFun = funLevel;

    if (action.saveAmount !== undefined) newSaved += action.saveAmount;
    if (action.earnAmount !== undefined) newSaved += action.earnAmount;

    if (action.spendAmount !== undefined) {
      newSaved -= action.spendAmount;
      if (newSaved < 0) newSaved = 0;
    }

    if (action.funChange !== undefined) {
      newFun = clampFun(newFun + action.funChange);
    }

    const updatedCounts = {
      ...usedCounts,
      [action.text]: (usedCounts[action.text] ?? 0) + 1,
    };

    setSavedMoney(newSaved);
    setFunLevel(newFun);
    setSelectedActionText(action.text);
    setHasChosen(true);
    setUsedCounts(updatedCounts);
    setFeedback(buildActionMessage(action));

    setPendingAction(null);
    setPopupMessage("");
    setShowPopup(false);
  }

  function nextRound() {
    setRound((prev) => prev + 1);
    setHasChosen(false);
    setSelectedActionText("");
    setFeedback("Choose one action.");
    setCurrentChoices(getBalancedChoices(usedCounts));
  }

  function handleFinish() {
    localStorage.removeItem(storageKey);
    navigate("/dashboard");
  }

  return (
    <div className="saving-lesson-container">
      <div className="top-bar">
        <p className="saving-lesson-title">{lesson.title}</p>

        <div className="fun-meter-mini">
          <p className="fun-meter-label">Fun Meter</p>

          <div className="fun-track">
            <div
              className={`fun-fill ${funReached ? "fun-good" : "fun-low"}`}
              style={{ width: `${funProgress}%` }}
            />

            <div
              className="fun-target"
              style={{ left: `${funTargetPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="saving-goal-box">
        <h2>🐷 Save for your {goal}</h2>
        <p>Goal: ${goalCost}</p>
        <p>Saved: ${savedMoney}</p>
        <p>You still need: ${Math.max(goalCost - savedMoney, 0)}</p>
      </div>

      <div className="meter-section">
        <div className="meter-card">
          <div className="meter-header">
            <span>💰 Money Goal</span>
            <span>
              ${savedMoney} / ${goalCost}
            </span>
          </div>

          <div className="saving-progress-border">
            <div
              className="saving-progress-fill"
              style={{ width: `${moneyProgress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="saving-piggy-area">
        <img
          src="https://pngimg.com/d/piggy_bank_PNG56.png"
          alt="Piggy Bank"
          className="saving-piggy-img"
        />
      </div>

      <div className="saving-feedback-box">
        <p>{feedback}</p>
      </div>

      {!isFinished && (
        <>
          <p className="saving-round-text">Round {round}</p>

          <div className="saving-actions-grid">
            {currentChoices.map((action, index) => (
              <button
                key={`${action.text}-${index}`}
                className={`saving-action-card ${
                  selectedActionText === action.text ? "saving-selected-card" : ""
                }`}
                onClick={() => handleAction(action)}
                disabled={hasChosen || showPopup}
              >
                <img
                  src={action.img}
                  alt={action.text}
                  className="saving-action-img"
                />

                <p className="saving-action-title">{action.text}</p>

                {action.saveAmount !== undefined && (
                  <p className="saving-action-money">Save +${action.saveAmount}</p>
                )}

                {action.earnAmount !== undefined && (
                  <p className="saving-action-money">Earn +${action.earnAmount}</p>
                )}

                {action.spendAmount !== undefined && (
                  <p className="saving-action-money">Spend -${action.spendAmount}</p>
                )}

                {action.funChange !== undefined && (
                  <p
                    className={`saving-action-fun ${
                      action.funChange > 0 ? "fun-positive" : "fun-negative"
                    }`}
                  >
                    Fun {action.funChange > 0 ? `+${action.funChange}` : action.funChange}
                  </p>
                )}
              </button>
            ))}
          </div>

          {hasChosen && (
            <button className="saving-finish-btn" onClick={nextRound}>
              Next Round
            </button>
          )}
        </>
      )}

      {isFinished && (
        <div className="saving-result-box">
          <h3>You reached both goals 🎉</h3>

          <button className="saving-finish-btn" onClick={handleFinish}>
            Finish
          </button>
        </div>
      )}

      {showPopup && (
        <div className="saving-popup-overlay">
          <div className="saving-popup-box">
            <h3 className="saving-popup-title">Warning</h3>
            <p className="saving-popup-text">{popupMessage}</p>

            <div className="saving-popup-actions">
              <button
                className="saving-popup-btn saving-popup-back-btn"
                onClick={handlePopupBack}
              >
                Back
              </button>

              <button
                className="saving-popup-btn"
                onClick={handlePopupOk}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SimulatorGame;