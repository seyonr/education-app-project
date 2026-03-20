// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import lessonsData from "../../data/lessons";
// import "./Lesson.css";
// import DragandDropLesson from '../DragandDropLesson/DragandDropLesson';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

// function Lesson() {
//     const { grade, unit, lessonId } = useParams();
//     const navigate = useNavigate();
//     const location = useLocation();

//     const unitLesson = lessonsData[grade]?.[unit];
//     const initialQuestion = location.state?.currentQuestion ?? 0;

//     const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
//     const [feedback, setFeedback] = useState("");
//     const [feedbackType, setFeedbackType] = useState("");
//     const [isCorrectSelected, setIsCorrectSelected] = useState(false);
//     const [wrongAttempts, setWrongAttempts] = useState(0);

//     if (!unitLesson) {
//         return <h2>Unit not found</h2>;
//     }

//     const lesson = unitLesson.find((l) => l.id === Number(lessonId));

//     if (!lesson || lesson.questions.length === 0) {
//         return <h2>Lesson not found</h2>;
//     }

//     const markLessonComplete = () => {
//         const key = `progress_${grade}_${unit}`;
//         const saved = JSON.parse(localStorage.getItem(key)) || [];

//         if (!saved.includes(Number(lessonId))) {
//             const updated = [...saved, Number(lessonId)];
//             localStorage.setItem(key, JSON.stringify(updated));
//         }
//     };

//     if (lesson.type === "drag-drop") {
//         return (
//             <DragandDropLesson
//                 lesson={lesson}
//                 grade={grade}
//                 unit={unit}
//                 lessonId={lessonId}
//             />
//         );
//     }

//     const q = lesson.questions[currentQuestion];
//     const progress = ((currentQuestion + 1) / lesson.questions.length) * 100;

//     const handleNext = () => {
//         if (currentQuestion < lesson.questions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//             setIsCorrectSelected(false);
//             setFeedback("");
//             setFeedbackType("");
//             setWrongAttempts(0);
//         } else {
//             markLessonComplete();
//             navigate(`/lessons/${grade}/${unit}`);
//         }
//     };

//     const handleContext = () => {
//         navigate(`/lessonIntro/${grade}/${unit}/${lessonId}`, {
//             state: {
//                 currentQuestion: currentQuestion
//             }
//         });
//     };

//     const getFeedbackBoxStyle = () => {
//         if (feedbackType === "correct") {
//             return {
//                 background: "#dcfce7",
//                 border: "2px solid #22c55e",
//                 color: "#14532d"
//             };
//         }

//         if (feedbackType === "hint") {
//             return {
//                 background: "#fef3c7",
//                 border: "2px solid #f59e0b",
//                 color: "#78350f"
//             };
//         }

//         return {};
//     };

//     function chooseOption(option) {
//         if (option.isBest) {
//             setFeedback(option.effect || "Great choice!");
//             setFeedbackType("correct");
//             setIsCorrectSelected(true);
//             return;
//         }

//         const nextWrongCount = wrongAttempts + 1;
//         setWrongAttempts(nextWrongCount);
//         setIsCorrectSelected(false);

//         if (nextWrongCount === 1) {
//             setFeedback(
//                 option.hint ||
//                 q.generalHint ||
//                 "Try again. Think about which choice helps the most."
//             );
//             setFeedbackType("hint");
//         } else {
//             setFeedback(
//                 q.generalHint ||
//                 "Try again. Think about needs first, goals, and saving money."
//             );
//             setFeedbackType("hint");
//         }
//     }

//     return (
//         <div className='lesson-container'>
//             <div className="progress-bar-border">
//                 <div
//                     className="progress"
//                     style={{ width: `${progress}%` }}
//                 ></div>
//             </div>

//             <p className='lesson-title'>
//                 Lesson {lessonId} - {lesson.title}
//             </p>

//             <div className="questions-container">
//                 <div className="left-container">
//                     <div className="scenario-box">
//                         {q.scenarioTitle && (
//                             <h3 className="scenario-title">{q.scenarioTitle}</h3>
//                         )}

//                         {q.scenarioText && (
//                             <p className="scenario-text">{q.scenarioText}</p>
//                         )}

//                         {(q.walletAmount !== undefined || q.goal) && (
//                             <div className="scenario-stats">
//                                 {q.walletAmount !== undefined && (
//                                     <div className="scenario-pill">💰 ${q.walletAmount}</div>
//                                 )}
//                                 {q.goal && (
//                                     <div className="scenario-pill">🎯 {q.goal}</div>
//                                 )}
//                             </div>
//                         )}

//                         <h4 className='question-text'>{q.question}</h4>
//                     </div>

//                     {q.images?.[0]?.questionImg && (
//                         <img
//                             src={q.images[0].questionImg}
//                             className="question-img"
//                             alt="lesson scenario"
//                         />
//                     )}
//                 </div>

//                 <div className="option-container">
//                     {q.options?.map((option, index) => (
//                         <div
//                             className='option-btn'
//                             key={index}
//                             onClick={() => chooseOption(option)}
//                         >
//                             <img
//                                 src={option.img}
//                                 className="option-img"
//                                 alt={option.text}
//                                 height={160}
//                                 width={160}
//                             />

//                             <p className='option-txt'>{option.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {feedback && (
//                 <div
//                     className="answer-box"
//                     style={getFeedbackBoxStyle()}
//                 >
//                     <h3 className="answer-title">
//                         {feedbackType === "correct" ? "Great choice! 🎉" : "Hint 💡"}
//                     </h3>
//                     <p className="answer-text">{feedback}</p>
//                 </div>
//             )}

//             <div className="lesson-actions">
//                 <button className='context-btn' onClick={handleContext}>
//                     <FontAwesomeIcon icon={faLightbulb} /> Hint
//                 </button>

//                 <button
//                     className="next-btn"
//                     onClick={handleNext}
//                     disabled={!isCorrectSelected}
//                 >
//                     {currentQuestion === lesson.questions.length - 1 ? "Finish" : <>Next &rarr;</>}
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Lesson;

// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------

// import React, { useEffect, useMemo, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import lessonsData from "../../data/lessons";
// import "./Lesson.css";

// function Lesson() {
//   const { grade, unit, lessonId } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const unitLessons = lessonsData[grade]?.[unit] || [];
//   const lesson = unitLessons.find((item) => item.id === Number(lessonId));

//   const initialQuestionFromState = Number.isInteger(location.state?.currentQuestion)
//     ? location.state.currentQuestion
//     : 0;

//   const maxQuestionIndex =
//     lesson && lesson.questions && lesson.questions.length > 0
//       ? lesson.questions.length - 1
//       : 0;

//   const [currentQuestion, setCurrentQuestion] = useState(
//     Math.min(initialQuestionFromState, maxQuestionIndex)
//   );
//   const [feedback, setFeedback] = useState("");
//   const [feedbackType, setFeedbackType] = useState("");
//   const [isStepComplete, setIsStepComplete] = useState(false);
//   const [wrongAttempts, setWrongAttempts] = useState(0);
//   const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

//   const [selectedBudgetItems, setSelectedBudgetItems] = useState([]);
//   const [budgetSubmitted, setBudgetSubmitted] = useState(false);

//   const [revealedCards, setRevealedCards] = useState([]);
//   const [tapRevealAnswered, setTapRevealAnswered] = useState(false);

//   const [availableItems, setAvailableItems] = useState([]);
//   const [needBucketItems, setNeedBucketItems] = useState([]);
//   const [wantBucketItems, setWantBucketItems] = useState([]);
//   const [draggedItemId, setDraggedItemId] = useState(null);

//   const currentBudgetTotal = useMemo(() => {
//     return selectedBudgetItems.reduce((sum, item) => sum + item.price, 0);
//   }, [selectedBudgetItems]);

//   useEffect(() => {
//     if (!lesson || !lesson.questions || lesson.questions.length === 0) return;

//     const clampedIndex = Math.min(currentQuestion, lesson.questions.length - 1);
//     if (clampedIndex !== currentQuestion) {
//       setCurrentQuestion(clampedIndex);
//       return;
//     }

//     const q = lesson.questions[clampedIndex];
//     const qType = q.type || lesson.type || "scenario-choice";

//     setFeedback("");
//     setFeedbackType("");
//     setIsStepComplete(false);
//     setWrongAttempts(0);
//     setSelectedOptionIndex(null);

//     setSelectedBudgetItems([]);
//     setBudgetSubmitted(false);

//     setRevealedCards([]);
//     setTapRevealAnswered(false);

//     setDraggedItemId(null);

//     if (qType === "drag-drop") {
//       setAvailableItems(q.items || []);
//       setNeedBucketItems([]);
//       setWantBucketItems([]);
//     } else {
//       setAvailableItems([]);
//       setNeedBucketItems([]);
//       setWantBucketItems([]);
//     }
//   }, [lesson, currentQuestion]);

//   if (!lesson) {
//     return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Lesson not found</h2>;
//   }

//   if (!lesson.questions || lesson.questions.length === 0) {
//     return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Lesson not found</h2>;
//   }

//   const q = lesson.questions[currentQuestion];
//   if (!q) {
//     return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Question not found</h2>;
//   }

//   const questionType = q.type || lesson.type || "scenario-choice";
//   const progress = ((currentQuestion + 1) / lesson.questions.length) * 100;

//   const markLessonComplete = () => {
//     const key = `progress_${grade}_${unit}`;
//     const saved = JSON.parse(localStorage.getItem(key)) || [];

//     if (!saved.includes(Number(lessonId))) {
//       const updated = [...saved, Number(lessonId)];
//       localStorage.setItem(key, JSON.stringify(updated));
//     }
//   };

//   const awardCoins = () => {
//     const currentCoins = Number(localStorage.getItem("pennypalsCoins") || 120);
//     const reward = lesson.coinReward || 15;
//     const rewardKey = `coins_awarded_${grade}_${unit}_${lessonId}`;

//     if (!localStorage.getItem(rewardKey)) {
//       localStorage.setItem("pennypalsCoins", String(currentCoins + reward));
//       localStorage.setItem(rewardKey, "true");
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestion < lesson.questions.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//     } else {
//       markLessonComplete();
//       awardCoins();
//       navigate(`/lessons/${grade}/${unit}`);
//     }
//   };

//   const handleContext = () => {
//     navigate(`/lessonIntro/${grade}/${unit}/${lessonId}`, {
//       state: {
//         currentQuestion
//       }
//     });
//   };

//   const getFeedbackBoxStyle = () => {
//     if (feedbackType === "correct") {
//       return {
//         background: "#dcfce7",
//         border: "2px solid #22c55e",
//         color: "#14532d"
//       };
//     }

//     if (feedbackType === "hint") {
//       return {
//         background: "#fef3c7",
//         border: "2px solid #f59e0b",
//         color: "#78350f"
//       };
//     }

//     if (feedbackType === "info") {
//       return {
//         background: "#dbeafe",
//         border: "2px solid #3b82f6",
//         color: "#1e3a8a"
//       };
//     }

//     return {
//       background: "#f8fafc",
//       border: "2px solid #cbd5e1",
//       color: "#1f2937"
//     };
//   };

//   const getFeedbackTitle = () => {
//     if (feedbackType === "correct") return "Great job!";
//     if (feedbackType === "hint") return "Try again";
//     if (feedbackType === "info") return "Nice thinking";
//     return "Feedback";
//   };

//   const chooseScenarioOption = (option, index) => {
//     setSelectedOptionIndex(index);

//     if (option.isBest) {
//       setFeedback(option.effect || "Great choice!");
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//       return;
//     }

//     const nextWrongCount = wrongAttempts + 1;
//     setWrongAttempts(nextWrongCount);
//     setIsStepComplete(false);

//     if (nextWrongCount === 1) {
//       setFeedback(
//         option.hint ||
//           q.generalHint ||
//           "Try again. Think about needs first, savings goals, and smart choices."
//       );
//       setFeedbackType("hint");
//     } else {
//       setFeedback(
//         q.generalHint ||
//           "Think about which choice helps most in the long run."
//       );
//       setFeedbackType("hint");
//     }
//   };

//   const toggleBudgetItem = (item) => {
//     const alreadySelected = selectedBudgetItems.some((picked) => picked.id === item.id);

//     if (alreadySelected) {
//       setSelectedBudgetItems((prev) => prev.filter((picked) => picked.id !== item.id));
//       return;
//     }

//     setSelectedBudgetItems((prev) => [...prev, item]);
//   };

//   const submitBudgetBuilder = () => {
//     const pickedIds = selectedBudgetItems.map((item) => item.id).sort();
//     const correctIds = (q.correctItemIds || []).slice().sort();

//     const sameLength = pickedIds.length === correctIds.length;
//     const sameItems =
//       sameLength && pickedIds.every((id, index) => id === correctIds[index]);
//     const withinBudget = currentBudgetTotal <= (q.budget || 0);

//     setBudgetSubmitted(true);

//     if (sameItems && withinBudget) {
//       setFeedback(
//         q.successMessage ||
//           `Awesome! You stayed within $${q.budget} and made a smart plan.`
//       );
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//     } else {
//       setFeedback(
//         q.generalHint ||
//           `Try again. Stay within $${q.budget} and choose the most important items first.`
//       );
//       setFeedbackType("hint");
//       setIsStepComplete(false);
//     }
//   };

//   const toggleRevealCard = (cardId) => {
//     if (revealedCards.includes(cardId)) return;
//     setRevealedCards((prev) => [...prev, cardId]);
//   };

//   const answerTapReveal = (option) => {
//     setTapRevealAnswered(true);

//     if (option.isBest) {
//       setFeedback(option.effect || "Nice job using the clues.");
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//     } else {
//       setFeedback(
//         option.hint ||
//           q.generalHint ||
//           "Look at the clues again and think carefully."
//       );
//       setFeedbackType("hint");
//       setIsStepComplete(false);
//     }
//   };

//   const handleDragStart = (itemId) => {
//     setDraggedItemId(itemId);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const classifyItem = (item, bucket) => {
//     if (!item) return;

//     const isCorrect = item.bucket === bucket;

//     if (!isCorrect) {
//       setFeedback(
//         item.hint ||
//           q.generalHint ||
//           "Not quite. Ask yourself if the item is necessary right now or just extra."
//       );
//       setFeedbackType("hint");
//       setIsStepComplete(false);
//       return;
//     }

//     setAvailableItems((prev) => prev.filter((entry) => entry.id !== item.id));

//     if (bucket === "need") {
//       setNeedBucketItems((prev) => [...prev, item]);
//     } else {
//       setWantBucketItems((prev) => [...prev, item]);
//     }

//     const remainingCount = availableItems.length - 1;
//     if (remainingCount === 0) {
//       setFeedback(
//         q.successMessage || "Amazing! You sorted every item into the correct group."
//       );
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//     } else {
//       setFeedback(item.successText || `Nice! ${item.label} was sorted correctly.`);
//       setFeedbackType("info");
//       setIsStepComplete(false);
//     }
//   };

//   const handleDropToBucket = (bucket) => {
//     if (!draggedItemId) return;
//     const draggedItem = availableItems.find((item) => item.id === draggedItemId);
//     classifyItem(draggedItem, bucket);
//     setDraggedItemId(null);
//   };

//   const bucketLabels = q.bucketLabels || {
//     need: "Needs",
//     want: "Wants"
//   };

//   const renderHero = () => {
//     if (q.questionImg) {
//       return <img src={q.questionImg} className="question-img" alt="lesson visual" />;
//     }

//     if (q.heroEmoji) {
//       return (
//         <div className="hero-emoji-card">
//           <div className="hero-emoji">{q.heroEmoji}</div>
//           {q.heroCaption && <p className="hero-caption">{q.heroCaption}</p>}
//         </div>
//       );
//     }

//     return (
//       <div className="hero-emoji-card">
//         <div className="hero-emoji">💡</div>
//         <p className="hero-caption">Think it through and make a smart money choice.</p>
//       </div>
//     );
//   };

//   return (
//     <div className="lesson-container">
//       <div className="progress-bar-border">
//         <div className="progress" style={{ width: `${progress}%` }}></div>
//       </div>

//       <p className="lesson-title">
//         Lesson {lessonId} - {lesson.title}
//       </p>

//       <div className="questions-container">
//         <div className="left-container">
//           <div className="scenario-box">
//             {q.scenarioTitle && <h3 className="scenario-title">{q.scenarioTitle}</h3>}
//             {q.scenarioText && <p className="scenario-text">{q.scenarioText}</p>}

//             {(q.walletAmount !== undefined || q.goal || q.budget !== undefined) && (
//               <div className="scenario-stats">
//                 {q.walletAmount !== undefined && (
//                   <div className="scenario-pill">💰 ${q.walletAmount}</div>
//                 )}
//                 {q.budget !== undefined && (
//                   <div className="scenario-pill">🛒 Budget: ${q.budget}</div>
//                 )}
//                 {q.goal && <div className="scenario-pill">🎯 {q.goal}</div>}
//               </div>
//             )}

//             <h4 className="question-text">{q.question}</h4>
//           </div>

//           {renderHero()}
//         </div>

//         <div className="option-container">
//           {questionType === "scenario-choice" && (
//             <>
//               {q.options?.map((option, index) => (
//                 <button
//                   className={`option-btn ${selectedOptionIndex === index ? "selected-option" : ""}`}
//                   key={index}
//                   onClick={() => chooseScenarioOption(option, index)}
//                 >
//                   {option.img ? (
//                     <img src={option.img} className="option-img" alt={option.text} />
//                   ) : (
//                     <div className="option-emoji">{option.emoji || "⭐"}</div>
//                   )}

//                   <p className="option-txt">{option.text}</p>

//                   {option.subText && <p className="option-subtxt">{option.subText}</p>}
//                 </button>
//               ))}
//             </>
//           )}

//           {questionType === "budget-builder" && (
//             <div className="activity-panel">
//               <div
//                 className={`budget-total-card ${
//                   currentBudgetTotal > (q.budget || 0) ? "over-budget" : ""
//                 }`}
//               >
//                 <span>Total picked:</span>
//                 <strong>
//                   ${currentBudgetTotal} / ${q.budget}
//                 </strong>
//               </div>

//               <div className="budget-grid">
//                 {q.items?.map((item) => {
//                   const isPicked = selectedBudgetItems.some((picked) => picked.id === item.id);

//                   return (
//                     <button
//                       key={item.id}
//                       className={`budget-item-card ${isPicked ? "budget-item-selected" : ""}`}
//                       onClick={() => toggleBudgetItem(item)}
//                     >
//                       <div className="budget-item-emoji">{item.emoji || "🛍️"}</div>
//                       <div className="budget-item-name">{item.name}</div>
//                       <div className="budget-item-price">${item.price}</div>
//                       <div className="budget-item-tag">{item.tag}</div>
//                     </button>
//                   );
//                 })}
//               </div>

//               <button className="check-btn" onClick={submitBudgetBuilder}>
//                 Check My Plan
//               </button>

//               {budgetSubmitted && q.showAnswerTip && (
//                 <p className="mini-tip">
//                   Tip: good budgets usually put needs first and leave out extras.
//                 </p>
//               )}
//             </div>
//           )}

//           {questionType === "tap-reveal" && (
//             <div className="activity-panel">
//               <div className="clue-grid">
//                 {q.cards?.map((card) => {
//                   const isOpen = revealedCards.includes(card.id);

//                   return (
//                     <button
//                       key={card.id}
//                       className={`clue-card ${isOpen ? "clue-card-open" : ""}`}
//                       onClick={() => toggleRevealCard(card.id)}
//                     >
//                       {!isOpen ? (
//                         <>
//                           <div className="clue-cover-emoji">{card.coverEmoji || "🃏"}</div>
//                           <div className="clue-cover-text">Tap for a clue</div>
//                         </>
//                       ) : (
//                         <>
//                           <div className="clue-open-emoji">{card.emoji || "💡"}</div>
//                           <div className="clue-open-title">{card.title}</div>
//                           <div className="clue-open-text">{card.text}</div>
//                         </>
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               <div className="tap-answer-grid">
//                 {q.options?.map((option, index) => (
//                   <button
//                     key={index}
//                     className="tap-answer-btn"
//                     onClick={() => answerTapReveal(option)}
//                   >
//                     {option.text}
//                   </button>
//                 ))}
//               </div>

//               {!tapRevealAnswered && (
//                 <p className="mini-tip">Open the clue cards first, then answer.</p>
//               )}
//             </div>
//           )}

//           {questionType === "drag-drop" && (
//             <div className="activity-panel">
//               <div className="drag-instructions">
//                 Drag each item into the correct bucket, or use the quick buttons.
//               </div>

//               <div className="drag-bank">
//                 {availableItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className={`drag-item-card ${
//                       draggedItemId === item.id ? "drag-item-active" : ""
//                     }`}
//                     draggable
//                     onDragStart={() => handleDragStart(item.id)}
//                   >
//                     <div className="drag-item-emoji">{item.emoji || "📦"}</div>
//                     <div className="drag-item-label">{item.label}</div>

//                     <div className="quick-sort-row">
//                       <button
//                         className="quick-sort-btn"
//                         onClick={() => classifyItem(item, "need")}
//                       >
//                         {bucketLabels.need}
//                       </button>
//                       <button
//                         className="quick-sort-btn"
//                         onClick={() => classifyItem(item, "want")}
//                       >
//                         {bucketLabels.want}
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="drop-zone-grid">
//                 <div
//                   className="drop-zone"
//                   onDragOver={handleDragOver}
//                   onDrop={() => handleDropToBucket("need")}
//                 >
//                   <h4>{bucketLabels.need}</h4>
//                   <p className="drop-zone-subtitle">Things you need for living, learning, or health.</p>

//                   <div className="sorted-items">
//                     {needBucketItems.map((item) => (
//                       <div key={item.id} className="sorted-pill">
//                         <span>{item.emoji || "✅"}</span>
//                         <span>{item.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div
//                   className="drop-zone"
//                   onDragOver={handleDragOver}
//                   onDrop={() => handleDropToBucket("want")}
//                 >
//                   <h4>{bucketLabels.want}</h4>
//                   <p className="drop-zone-subtitle">Things that are fun extras but not necessary.</p>

//                   <div className="sorted-items">
//                     {wantBucketItems.map((item) => (
//                       <div key={item.id} className="sorted-pill">
//                         <span>{item.emoji || "✅"}</span>
//                         <span>{item.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {feedback && (
//         <div className="answer-box" style={getFeedbackBoxStyle()}>
//           <h3 className="answer-title">{getFeedbackTitle()}</h3>
//           <p className="answer-text">{feedback}</p>
//         </div>
//       )}

//       <div className="lesson-actions">
//         <button className="context-btn" onClick={handleContext}>
//           Lesson Help
//         </button>

//         <button className="next-btn" onClick={handleNext} disabled={!isStepComplete}>
//           {currentQuestion === lesson.questions.length - 1 ? "Finish Lesson" : "Next"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Lesson;



// import React, { useEffect, useMemo, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import lessonsData from "../../data/lessons";
// import "./Lesson.css";

// function Lesson() {
//   const { grade, unit, lessonId } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const unitLessons = lessonsData[grade]?.[unit] || [];
//   const lesson = unitLessons.find((item) => item.id === Number(lessonId));

//   const initialQuestionFromState = Number.isInteger(location.state?.currentQuestion)
//     ? location.state.currentQuestion
//     : 0;

//   const maxQuestionIndex =
//     lesson && lesson.questions && lesson.questions.length > 0
//       ? lesson.questions.length - 1
//       : 0;

//   const [currentQuestion, setCurrentQuestion] = useState(
//     Math.min(initialQuestionFromState, maxQuestionIndex)
//   );
//   const [feedback, setFeedback] = useState("");
//   const [feedbackType, setFeedbackType] = useState("");
//   const [isStepComplete, setIsStepComplete] = useState(false);
//   const [wrongAttempts, setWrongAttempts] = useState(0);
//   const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

//   const [selectedBudgetItems, setSelectedBudgetItems] = useState([]);
//   const [budgetSubmitted, setBudgetSubmitted] = useState(false);

//   const [revealedCards, setRevealedCards] = useState([]);
//   const [tapRevealAnswered, setTapRevealAnswered] = useState(false);

//   const [availableItems, setAvailableItems] = useState([]);
//   const [needBucketItems, setNeedBucketItems] = useState([]);
//   const [wantBucketItems, setWantBucketItems] = useState([]);
//   const [draggedItemId, setDraggedItemId] = useState(null);

//   const currentBudgetTotal = useMemo(() => {
//     return selectedBudgetItems.reduce((sum, item) => sum + item.price, 0);
//   }, [selectedBudgetItems]);

//   useEffect(() => {
//     if (!lesson || !lesson.questions || lesson.questions.length === 0) return;

//     const clampedIndex = Math.min(currentQuestion, lesson.questions.length - 1);
//     if (clampedIndex !== currentQuestion) {
//       setCurrentQuestion(clampedIndex);
//       return;
//     }

//     const q = lesson.questions[clampedIndex];
//     const qType = q.type || lesson.type || "scenario-choice";

//     setFeedback("");
//     setFeedbackType("");
//     setIsStepComplete(false);
//     setWrongAttempts(0);
//     setSelectedOptionIndex(null);

//     setSelectedBudgetItems([]);
//     setBudgetSubmitted(false);

//     setRevealedCards([]);
//     setTapRevealAnswered(false);

//     setDraggedItemId(null);

//     if (qType === "drag-drop") {
//       setAvailableItems(q.items || []);
//       setNeedBucketItems([]);
//       setWantBucketItems([]);
//     } else {
//       setAvailableItems([]);
//       setNeedBucketItems([]);
//       setWantBucketItems([]);
//     }
//   }, [lesson, currentQuestion]);

//   if (!lesson) {
//     return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Lesson not found</h2>;
//   }

//   if (!lesson.questions || lesson.questions.length === 0) {
//     return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Lesson not found</h2>;
//   }

//   const q = lesson.questions[currentQuestion];
//   if (!q) {
//     return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Question not found</h2>;
//   }

//   const questionType = q.type || lesson.type || "scenario-choice";
//   const progress = ((currentQuestion + 1) / lesson.questions.length) * 100;

//   const markLessonComplete = () => {
//     const key = `progress_${grade}_${unit}`;
//     const saved = JSON.parse(localStorage.getItem(key)) || [];

//     if (!saved.includes(Number(lessonId))) {
//       const updated = [...saved, Number(lessonId)];
//       localStorage.setItem(key, JSON.stringify(updated));
//     }
//   };

//   const awardCoins = () => {
//     const currentCoins = Number(localStorage.getItem("pennypalsCoins") || 120);
//     const reward = lesson.coinReward || 15;
//     const rewardKey = `coins_awarded_${grade}_${unit}_${lessonId}`;

//     if (!localStorage.getItem(rewardKey)) {
//       localStorage.setItem("pennypalsCoins", String(currentCoins + reward));
//       localStorage.setItem(rewardKey, "true");
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestion < lesson.questions.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//     } else {
//       markLessonComplete();
//       awardCoins();
//       navigate(`/lessons/${grade}/${unit}`);
//     }
//   };

//   const handleContext = () => {
//     navigate(`/lessonIntro/${grade}/${unit}/${lessonId}`, {
//       state: {
//         currentQuestion
//       }
//     });
//   };

//   const getFeedbackBoxStyle = () => {
//     if (feedbackType === "correct") {
//       return {
//         background: "#dcfce7",
//         border: "2px solid #22c55e",
//         color: "#14532d"
//       };
//     }

//     if (feedbackType === "hint") {
//       return {
//         background: "#fef3c7",
//         border: "2px solid #f59e0b",
//         color: "#78350f"
//       };
//     }

//     if (feedbackType === "info") {
//       return {
//         background: "#dbeafe",
//         border: "2px solid #3b82f6",
//         color: "#1e3a8a"
//       };
//     }

//     return {
//       background: "#f8fafc",
//       border: "2px solid #cbd5e1",
//       color: "#1f2937"
//     };
//   };

//   const getFeedbackTitle = () => {
//     if (feedbackType === "correct") return "Great job!";
//     if (feedbackType === "hint") return "Try again";
//     if (feedbackType === "info") return "Nice thinking";
//     return "Feedback";
//   };

//   const chooseScenarioOption = (option, index) => {
//     setSelectedOptionIndex(index);

//     if (option.isBest) {
//       setFeedback(option.effect || "Great choice!");
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//       return;
//     }

//     const nextWrongCount = wrongAttempts + 1;
//     setWrongAttempts(nextWrongCount);
//     setIsStepComplete(false);

//     if (nextWrongCount === 1) {
//       setFeedback(
//         option.hint ||
//           q.generalHint ||
//           "Try again. Think about needs first, savings goals, and smart choices."
//       );
//       setFeedbackType("hint");
//     } else {
//       setFeedback(
//         q.generalHint ||
//           "Think about which choice helps most in the long run."
//       );
//       setFeedbackType("hint");
//     }
//   };

//   const toggleBudgetItem = (item) => {
//     const alreadySelected = selectedBudgetItems.some((picked) => picked.id === item.id);

//     if (alreadySelected) {
//       setSelectedBudgetItems((prev) => prev.filter((picked) => picked.id !== item.id));
//       return;
//     }

//     setSelectedBudgetItems((prev) => [...prev, item]);
//   };

//   const submitBudgetBuilder = () => {
//     const pickedIds = selectedBudgetItems.map((item) => item.id).sort();
//     const correctIds = (q.correctItemIds || []).slice().sort();

//     const sameLength = pickedIds.length === correctIds.length;
//     const sameItems =
//       sameLength && pickedIds.every((id, index) => id === correctIds[index]);
//     const withinBudget = currentBudgetTotal <= (q.budget || 0);

//     setBudgetSubmitted(true);

//     if (sameItems && withinBudget) {
//       setFeedback(
//         q.successMessage ||
//           `Awesome! You stayed within $${q.budget} and made a smart plan.`
//       );
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//     } else {
//       setFeedback(
//         q.generalHint ||
//           `Try again. Stay within $${q.budget} and choose the most important items first.`
//       );
//       setFeedbackType("hint");
//       setIsStepComplete(false);
//     }
//   };

//   const toggleRevealCard = (cardId) => {
//     if (revealedCards.includes(cardId)) return;
//     setRevealedCards((prev) => [...prev, cardId]);
//   };

//   const answerTapReveal = (option) => {
//     setTapRevealAnswered(true);

//     if (option.isBest) {
//       setFeedback(option.effect || "Nice job using the clues.");
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//     } else {
//       setFeedback(
//         option.hint ||
//           q.generalHint ||
//           "Look at the clues again and think carefully."
//       );
//       setFeedbackType("hint");
//       setIsStepComplete(false);
//     }
//   };

//   const handleDragStart = (itemId) => {
//     setDraggedItemId(itemId);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const classifyItem = (item, bucket) => {
//     if (!item) return;

//     const actualBucket = item.bucket || item.type;
//     const label = item.label || item.name || "This item";
//     const isCorrect = actualBucket === bucket;

//     if (!isCorrect) {
//       setFeedback(
//         item.hint ||
//           q.generalHint ||
//           "Not quite. Ask yourself if the item is necessary right now or just extra."
//       );
//       setFeedbackType("hint");
//       setIsStepComplete(false);
//       return;
//     }

//     setAvailableItems((prev) => prev.filter((entry) => entry.id !== item.id));

//     if (bucket === "need") {
//       setNeedBucketItems((prev) => [...prev, item]);
//     } else {
//       setWantBucketItems((prev) => [...prev, item]);
//     }

//     const remainingCount = availableItems.length - 1;
//     if (remainingCount === 0) {
//       setFeedback(
//         q.successMessage || "Amazing! You sorted every item into the correct group."
//       );
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//     } else {
//       setFeedback(item.successText || `Nice! ${label} was sorted correctly.`);
//       setFeedbackType("info");
//       setIsStepComplete(false);
//     }
//   };

//   const handleDropToBucket = (bucket) => {
//     if (!draggedItemId) return;
//     const draggedItem = availableItems.find((item) => item.id === draggedItemId);
//     classifyItem(draggedItem, bucket);
//     setDraggedItemId(null);
//   };

//   const bucketLabels = q.bucketLabels || {
//     need: "Needs",
//     want: "Wants"
//   };

//   const renderHero = () => {
//     if (q.questionImg) {
//       return <img src={q.questionImg} className="question-img" alt="lesson visual" />;
//     }

//     if (q.images?.[0]?.questionImg) {
//       return (
//         <img
//           src={q.images[0].questionImg}
//           className="question-img"
//           alt="lesson visual"
//         />
//       );
//     }

//     if (q.heroEmoji) {
//       return (
//         <div className="hero-emoji-card">
//           <div className="hero-emoji">{q.heroEmoji}</div>
//           {q.heroCaption && <p className="hero-caption">{q.heroCaption}</p>}
//         </div>
//       );
//     }

//     return (
//       <div className="hero-emoji-card">
//         <div className="hero-emoji">💡</div>
//         <p className="hero-caption">Think it through and make a smart money choice.</p>
//       </div>
//     );
//   };

//   return (
//     <div className="lesson-container">
//       <div className="progress-bar-border">
//         <div className="progress" style={{ width: `${progress}%` }}></div>
//       </div>

//       <p className="lesson-title">
//         Lesson {lessonId} - {lesson.title}
//       </p>

//       <div className="questions-container">
//         <div className="left-container">
//           <div className="scenario-box">
//             {q.scenarioTitle && <h3 className="scenario-title">{q.scenarioTitle}</h3>}
//             {q.scenarioText && <p className="scenario-text">{q.scenarioText}</p>}

//             {(q.walletAmount !== undefined || q.goal || q.budget !== undefined) && (
//               <div className="scenario-stats">
//                 {q.walletAmount !== undefined && (
//                   <div className="scenario-pill">💰 ${q.walletAmount}</div>
//                 )}
//                 {q.budget !== undefined && (
//                   <div className="scenario-pill">🛒 Budget: ${q.budget}</div>
//                 )}
//                 {q.goal && <div className="scenario-pill">🎯 {q.goal}</div>}
//               </div>
//             )}

//             <h4 className="question-text">{q.question}</h4>
//           </div>

//           {renderHero()}
//         </div>

//         <div className="option-container">
//           {questionType === "scenario-choice" && (
//             <>
//               {q.options?.map((option, index) => (
//                 <button
//                   className={`option-btn ${selectedOptionIndex === index ? "selected-option" : ""}`}
//                   key={index}
//                   onClick={() => chooseScenarioOption(option, index)}
//                 >
//                   {option.img ? (
//                     <img src={option.img} className="option-img" alt={option.text} />
//                   ) : (
//                     <div className="option-emoji">{option.emoji || "⭐"}</div>
//                   )}

//                   <p className="option-txt">{option.text}</p>

//                   {option.subText && <p className="option-subtxt">{option.subText}</p>}
//                 </button>
//               ))}
//             </>
//           )}

//           {questionType === "budget-builder" && (
//             <div className="activity-panel">
//               <div
//                 className={`budget-total-card ${
//                   currentBudgetTotal > (q.budget || 0) ? "over-budget" : ""
//                 }`}
//               >
//                 <span>Total picked:</span>
//                 <strong>
//                   ${currentBudgetTotal} / ${q.budget}
//                 </strong>
//               </div>

//               <div className="budget-grid">
//                 {q.items?.map((item) => {
//                   const isPicked = selectedBudgetItems.some((picked) => picked.id === item.id);

//                   return (
//                     <button
//                       key={item.id}
//                       className={`budget-item-card ${isPicked ? "budget-item-selected" : ""}`}
//                       onClick={() => toggleBudgetItem(item)}
//                     >
//                       <div className="budget-item-emoji">{item.emoji || "🛍️"}</div>
//                       <div className="budget-item-name">{item.name}</div>
//                       <div className="budget-item-price">${item.price}</div>
//                       <div className="budget-item-tag">{item.tag}</div>
//                     </button>
//                   );
//                 })}
//               </div>

//               <button className="check-btn" onClick={submitBudgetBuilder}>
//                 Check My Plan
//               </button>

//               {budgetSubmitted && q.showAnswerTip && (
//                 <p className="mini-tip">
//                   Tip: good budgets usually put needs first and leave out extras.
//                 </p>
//               )}
//             </div>
//           )}

//           {questionType === "tap-reveal" && (
//             <div className="activity-panel">
//               <div className="clue-grid">
//                 {q.cards?.map((card) => {
//                   const isOpen = revealedCards.includes(card.id);

//                   return (
//                     <button
//                       key={card.id}
//                       className={`clue-card ${isOpen ? "clue-card-open" : ""}`}
//                       onClick={() => toggleRevealCard(card.id)}
//                     >
//                       {!isOpen ? (
//                         <>
//                           <div className="clue-cover-emoji">{card.coverEmoji || "🃏"}</div>
//                           <div className="clue-cover-text">Tap for a clue</div>
//                         </>
//                       ) : (
//                         <>
//                           <div className="clue-open-emoji">{card.emoji || "💡"}</div>
//                           <div className="clue-open-title">{card.title}</div>
//                           <div className="clue-open-text">{card.text}</div>
//                         </>
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               <div className="tap-answer-grid">
//                 {q.options?.map((option, index) => (
//                   <button
//                     key={index}
//                     className="tap-answer-btn"
//                     onClick={() => answerTapReveal(option)}
//                   >
//                     {option.text}
//                   </button>
//                 ))}
//               </div>

//               {!tapRevealAnswered && (
//                 <p className="mini-tip">Open the clue cards first, then answer.</p>
//               )}
//             </div>
//           )}

//           {questionType === "drag-drop" && (
//             <div className="activity-panel">
//               <div className="drag-instructions">
//                 Drag each item into the correct bucket, or use the quick buttons.
//               </div>

//               <div className="drag-bank">
//                 {availableItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className={`drag-item-card ${
//                       draggedItemId === item.id ? "drag-item-active" : ""
//                     }`}
//                     draggable
//                     onDragStart={() => handleDragStart(item.id)}
//                   >
//                     <div className="drag-item-emoji">{item.emoji || "📦"}</div>
//                     <div className="drag-item-label">{item.label || item.name}</div>

//                     <div className="quick-sort-row">
//                       <button
//                         className="quick-sort-btn"
//                         onClick={() => classifyItem(item, "need")}
//                       >
//                         {bucketLabels.need}
//                       </button>
//                       <button
//                         className="quick-sort-btn"
//                         onClick={() => classifyItem(item, "want")}
//                       >
//                         {bucketLabels.want}
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="drop-zone-grid">
//                 <div
//                   className="drop-zone"
//                   onDragOver={handleDragOver}
//                   onDrop={() => handleDropToBucket("need")}
//                 >
//                   <h4>{bucketLabels.need}</h4>
//                   <p className="drop-zone-subtitle">Things you need for living, learning, or health.</p>

//                   <div className="sorted-items">
//                     {needBucketItems.map((item) => (
//                       <div key={item.id} className="sorted-pill">
//                         <span>{item.emoji || "✅"}</span>
//                         <span>{item.label || item.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div
//                   className="drop-zone"
//                   onDragOver={handleDragOver}
//                   onDrop={() => handleDropToBucket("want")}
//                 >
//                   <h4>{bucketLabels.want}</h4>
//                   <p className="drop-zone-subtitle">Things that are fun extras but not necessary.</p>

//                   <div className="sorted-items">
//                     {wantBucketItems.map((item) => (
//                       <div key={item.id} className="sorted-pill">
//                         <span>{item.emoji || "✅"}</span>
//                         <span>{item.label || item.name}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {feedback && (
//         <div className="answer-box" style={getFeedbackBoxStyle()}>
//           <h3 className="answer-title">{getFeedbackTitle()}</h3>
//           <p className="answer-text">{feedback}</p>
//         </div>
//       )}

//       <div className="lesson-actions">
//         <button className="context-btn" onClick={handleContext}>
//           Lesson Help
//         </button>

//         <button className="next-btn" onClick={handleNext} disabled={!isStepComplete}>
//           {currentQuestion === lesson.questions.length - 1 ? "Finish Lesson" : "Next"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Lesson;


// import React, { useEffect, useMemo, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import lessonsData from "../../data/lessons";
// import { addCoins } from "../../coinUtils";
// import "./Lesson.css";

// function Lesson() {
//   const { grade, unit, lessonId } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const unitLessons = lessonsData[grade]?.[unit] || [];
//   const lesson = unitLessons.find((item) => item.id === Number(lessonId));

//   const initialQuestionFromState = Number.isInteger(location.state?.currentQuestion)
//     ? location.state.currentQuestion
//     : 0;

//   const maxQuestionIndex =
//     lesson && lesson.questions && lesson.questions.length > 0
//       ? lesson.questions.length - 1
//       : 0;

//   const [currentQuestion, setCurrentQuestion] = useState(
//     Math.min(initialQuestionFromState, maxQuestionIndex)
//   );
//   const [feedback, setFeedback] = useState("");
//   const [feedbackType, setFeedbackType] = useState("");
//   const [isStepComplete, setIsStepComplete] = useState(false);
//   const [wrongAttempts, setWrongAttempts] = useState(0);
//   const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

//   const [selectedBudgetItems, setSelectedBudgetItems] = useState([]);
//   const [budgetSubmitted, setBudgetSubmitted] = useState(false);

//   const [revealedCards, setRevealedCards] = useState([]);
//   const [tapRevealAnswered, setTapRevealAnswered] = useState(false);

//   const [availableItems, setAvailableItems] = useState([]);
//   const [needBucketItems, setNeedBucketItems] = useState([]);
//   const [wantBucketItems, setWantBucketItems] = useState([]);
//   const [draggedItemId, setDraggedItemId] = useState(null);

//   const currentBudgetTotal = useMemo(() => {
//     return selectedBudgetItems.reduce((sum, item) => sum + item.price, 0);
//   }, [selectedBudgetItems]);

//   useEffect(() => {
//     if (!lesson || !lesson.questions || lesson.questions.length === 0) return;

//     const clampedIndex = Math.min(currentQuestion, lesson.questions.length - 1);
//     if (clampedIndex !== currentQuestion) {
//       setCurrentQuestion(clampedIndex);
//       return;
//     }

//     const q = lesson.questions[clampedIndex];
//     const qType = q.type || lesson.type || "scenario-choice";

//     setFeedback("");
//     setFeedbackType("");
//     setIsStepComplete(false);
//     setWrongAttempts(0);
//     setSelectedOptionIndex(null);

//     setSelectedBudgetItems([]);
//     setBudgetSubmitted(false);

//     setRevealedCards([]);
//     setTapRevealAnswered(false);

//     setDraggedItemId(null);

//     if (qType === "drag-drop") {
//       setAvailableItems(q.items || []);
//       setNeedBucketItems([]);
//       setWantBucketItems([]);
//     } else {
//       setAvailableItems([]);
//       setNeedBucketItems([]);
//       setWantBucketItems([]);
//     }
//   }, [lesson, currentQuestion]);

//   if (!lesson) {
//     return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Lesson not found</h2>;
//   }

//   if (!lesson.questions || lesson.questions.length === 0) {
//     return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Lesson not found</h2>;
//   }

//   const q = lesson.questions[currentQuestion];
//   if (!q) {
//     return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Question not found</h2>;
//   }

//   const questionType = q.type || lesson.type || "scenario-choice";
//   const progress = ((currentQuestion + 1) / lesson.questions.length) * 100;

//   const markLessonComplete = () => {
//     const key = `progress_${grade}_${unit}`;
//     const saved = JSON.parse(localStorage.getItem(key)) || [];

//     if (!saved.includes(Number(lessonId))) {
//       const updated = [...saved, Number(lessonId)];
//       localStorage.setItem(key, JSON.stringify(updated));
//     }
//   };

//   const awardCoins = () => {
//     const reward = lesson.coinReward || 15;
//     const rewardKey = `coins_awarded_${grade}_${unit}_${lessonId}`;

//     if (!localStorage.getItem(rewardKey)) {
//       localStorage.setItem(rewardKey, "true");
//       addCoins(reward);
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestion < lesson.questions.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//     } else {
//       markLessonComplete();
//       awardCoins();
//       navigate(`/lessons/${grade}/${unit}`);
//     }
//   };

//   const handleContext = () => {
//     navigate(`/lessonIntro/${grade}/${unit}/${lessonId}`, {
//       state: {
//         currentQuestion
//       }
//     });
//   };

//   const getFeedbackBoxStyle = () => {
//     if (feedbackType === "correct") {
//       return {
//         background: "#dcfce7",
//         border: "2px solid #22c55e",
//         color: "#14532d"
//       };
//     }

//     if (feedbackType === "hint") {
//       return {
//         background: "#fef3c7",
//         border: "2px solid #f59e0b",
//         color: "#78350f"
//       };
//     }

//     if (feedbackType === "info") {
//       return {
//         background: "#dbeafe",
//         border: "2px solid #3b82f6",
//         color: "#1e3a8a"
//       };
//     }

//     return {
//       background: "#f8fafc",
//       border: "2px solid #cbd5e1",
//       color: "#1f2937"
//     };
//   };

//   const getFeedbackTitle = () => {
//     if (feedbackType === "correct") return "Great job!";
//     if (feedbackType === "hint") return "Try again";
//     if (feedbackType === "info") return "Nice thinking";
//     return "Feedback";
//   };

//   const chooseScenarioOption = (option, index) => {
//     setSelectedOptionIndex(index);

//     if (option.isBest) {
//       setFeedback(option.effect || "Great choice!");
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//       return;
//     }

//     const nextWrongCount = wrongAttempts + 1;
//     setWrongAttempts(nextWrongCount);
//     setIsStepComplete(false);

//     if (nextWrongCount === 1) {
//       setFeedback(
//         option.hint ||
//           q.generalHint ||
//           "Try again. Think about needs first, savings goals, and smart choices."
//       );
//       setFeedbackType("hint");
//     } else {
//       setFeedback(
//         q.generalHint ||
//           "Think about which choice helps most in the long run."
//       );
//       setFeedbackType("hint");
//     }
//   };

//   const toggleBudgetItem = (item) => {
//     const alreadySelected = selectedBudgetItems.some((picked) => picked.id === item.id);

//     if (alreadySelected) {
//       setSelectedBudgetItems((prev) => prev.filter((picked) => picked.id !== item.id));
//       return;
//     }

//     setSelectedBudgetItems((prev) => [...prev, item]);
//   };

//   const submitBudgetBuilder = () => {
//     const pickedIds = selectedBudgetItems.map((item) => item.id).sort();
//     const correctIds = (q.correctItemIds || []).slice().sort();

//     const sameLength = pickedIds.length === correctIds.length;
//     const sameItems =
//       sameLength && pickedIds.every((id, index) => id === correctIds[index]);
//     const withinBudget = currentBudgetTotal <= (q.budget || 0);

//     setBudgetSubmitted(true);

//     if (sameItems && withinBudget) {
//       setFeedback(
//         q.successMessage ||
//           `Awesome! You stayed within $${q.budget} and made a smart plan.`
//       );
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//     } else {
//       setFeedback(
//         q.generalHint ||
//           `Try again. Stay within $${q.budget} and choose the most important items first.`
//       );
//       setFeedbackType("hint");
//       setIsStepComplete(false);
//     }
//   };

//   const toggleRevealCard = (cardId) => {
//     if (revealedCards.includes(cardId)) return;
//     setRevealedCards((prev) => [...prev, cardId]);
//   };

//   const answerTapReveal = (option) => {
//     setTapRevealAnswered(true);

//     if (option.isBest) {
//       setFeedback(option.effect || "Nice job using the clues.");
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//     } else {
//       setFeedback(
//         option.hint ||
//           q.generalHint ||
//           "Look at the clues again and think carefully."
//       );
//       setFeedbackType("hint");
//       setIsStepComplete(false);
//     }
//   };

//   const handleDragStart = (itemId) => {
//     setDraggedItemId(itemId);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const classifyItem = (item, bucket) => {
//     if (!item) return;

//     const actualBucket = item.bucket || item.type;
//     const label = item.label || item.name || "This item";
//     const isCorrect = actualBucket === bucket;

//     if (!isCorrect) {
//       setFeedback(
//         item.hint ||
//           q.generalHint ||
//           "Not quite. Ask yourself if the item is necessary right now or just extra."
//       );
//       setFeedbackType("hint");
//       setIsStepComplete(false);
//       return;
//     }

//     setAvailableItems((prev) => prev.filter((entry) => entry.id !== item.id));

//     if (bucket === "need") {
//       setNeedBucketItems((prev) => [...prev, item]);
//     } else {
//       setWantBucketItems((prev) => [...prev, item]);
//     }

//     const remainingCount = availableItems.length - 1;
//     if (remainingCount === 0) {
//       setFeedback(
//         q.successMessage || "Amazing! You sorted every item into the correct group."
//       );
//       setFeedbackType("correct");
//       setIsStepComplete(true);
//     } else {
//       setFeedback(item.successText || `Nice! ${label} was sorted correctly.`);
//       setFeedbackType("info");
//       setIsStepComplete(false);
//     }
//   };

//   const handleDropToBucket = (bucket) => {
//     if (!draggedItemId) return;
//     const draggedItem = availableItems.find((item) => item.id === draggedItemId);
//     classifyItem(draggedItem, bucket);
//     setDraggedItemId(null);
//   };

//   const bucketLabels = q.bucketLabels || {
//     need: "Needs",
//     want: "Wants"
//   };

//   const renderHero = () => {
//     if (q.questionImg) {
//       return <img src={q.questionImg} className="question-img" alt="lesson visual" />;
//     }

//     if (q.images?.[0]?.questionImg) {
//       return (
//         <img
//           src={q.images[0].questionImg}
//           className="question-img"
//           alt="lesson visual"
//         />
//       );
//     }

//     if (q.heroEmoji) {
//       return (
//         <div className="hero-emoji-card">
//           <div className="hero-emoji">{q.heroEmoji}</div>
//           {q.heroCaption && <p className="hero-caption">{q.heroCaption}</p>}
//         </div>
//       );
//     }

//     return (
//       <div className="hero-emoji-card">
//         <div className="hero-emoji">💡</div>
//         <p className="hero-caption">Think it through and make a smart money choice.</p>
//       </div>
//     );
//   };

//   return (
//     <div className="lesson-container">
//       <div className="progress-bar-border">
//         <div className="progress" style={{ width: `${progress}%` }}></div>
//       </div>

//       <p className="lesson-title">
//         Lesson {lessonId} - {lesson.title}
//       </p>

//       <div className="questions-container">
//         <div className="left-container">
//           <div className="scenario-box">
//             {q.scenarioTitle && <h3 className="scenario-title">{q.scenarioTitle}</h3>}
//             {q.scenarioText && <p className="scenario-text">{q.scenarioText}</p>}

//             {(q.walletAmount !== undefined || q.goal || q.budget !== undefined) && (
//               <div className="scenario-stats">
//                 {q.walletAmount !== undefined && (
//                   <div className="scenario-pill">💰 ${q.walletAmount}</div>
//                 )}
//                 {q.budget !== undefined && (
//                   <div className="scenario-pill">🛒 Budget: ${q.budget}</div>
//                 )}
//                 {q.goal && <div className="scenario-pill">🎯 {q.goal}</div>}
//               </div>
//             )}

//             <h4 className="question-text">{q.question}</h4>
//           </div>

//           {renderHero()}

//           {questionType === "drag-drop" && (
//             <div className="drop-zone-grid drop-zone-grid-left">
//               <div
//                 className="drop-zone"
//                 onDragOver={handleDragOver}
//                 onDrop={() => handleDropToBucket("need")}
//               >
//                 <h4>{bucketLabels.need}</h4>
//                 <p className="drop-zone-subtitle">
//                   Things you need for living, learning, or health.
//                 </p>

//                 <div className="sorted-items">
//                   {needBucketItems.map((item) => (
//                     <div key={item.id} className="sorted-pill">
//                       <span>{item.emoji || "✅"}</span>
//                       <span>{item.label || item.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div
//                 className="drop-zone"
//                 onDragOver={handleDragOver}
//                 onDrop={() => handleDropToBucket("want")}
//               >
//                 <h4>{bucketLabels.want}</h4>
//                 <p className="drop-zone-subtitle">
//                   Things that are fun extras but not necessary.
//                 </p>

//                 <div className="sorted-items">
//                   {wantBucketItems.map((item) => (
//                     <div key={item.id} className="sorted-pill">
//                       <span>{item.emoji || "✅"}</span>
//                       <span>{item.label || item.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="option-container">
//           {questionType === "scenario-choice" && (
//             <>
//               {q.options?.map((option, index) => (
//                 <button
//                   className={`option-btn ${selectedOptionIndex === index ? "selected-option" : ""}`}
//                   key={index}
//                   onClick={() => chooseScenarioOption(option, index)}
//                 >
//                   {option.img ? (
//                     <img src={option.img} className="option-img" alt={option.text} />
//                   ) : (
//                     <div className="option-emoji">{option.emoji || "⭐"}</div>
//                   )}

//                   <p className="option-txt">{option.text}</p>

//                   {option.subText && <p className="option-subtxt">{option.subText}</p>}
//                 </button>
//               ))}
//             </>
//           )}

//           {questionType === "budget-builder" && (
//             <div className="activity-panel">
//               <div
//                 className={`budget-total-card ${
//                   currentBudgetTotal > (q.budget || 0) ? "over-budget" : ""
//                 }`}
//               >
//                 <span>Total picked:</span>
//                 <strong>
//                   ${currentBudgetTotal} / ${q.budget}
//                 </strong>
//               </div>

//               <div className="budget-grid">
//                 {q.items?.map((item) => {
//                   const isPicked = selectedBudgetItems.some((picked) => picked.id === item.id);

//                   return (
//                     <button
//                       key={item.id}
//                       className={`budget-item-card ${isPicked ? "budget-item-selected" : ""}`}
//                       onClick={() => toggleBudgetItem(item)}
//                     >
//                       <div className="budget-item-emoji">{item.emoji || "🛍️"}</div>
//                       <div className="budget-item-name">{item.name}</div>
//                       <div className="budget-item-price">${item.price}</div>
//                       <div className="budget-item-tag">{item.tag}</div>
//                     </button>
//                   );
//                 })}
//               </div>

//               <button className="check-btn" onClick={submitBudgetBuilder}>
//                 Check My Plan
//               </button>

//               {budgetSubmitted && q.showAnswerTip && (
//                 <p className="mini-tip">
//                   Tip: good budgets usually put needs first and leave out extras.
//                 </p>
//               )}
//             </div>
//           )}

//           {questionType === "tap-reveal" && (
//             <div className="activity-panel">
//               <div className="clue-grid">
//                 {q.cards?.map((card) => {
//                   const isOpen = revealedCards.includes(card.id);

//                   return (
//                     <button
//                       key={card.id}
//                       className={`clue-card ${isOpen ? "clue-card-open" : ""}`}
//                       onClick={() => toggleRevealCard(card.id)}
//                     >
//                       {!isOpen ? (
//                         <>
//                           <div className="clue-cover-emoji">{card.coverEmoji || "🃏"}</div>
//                           <div className="clue-cover-text">Tap for a clue</div>
//                         </>
//                       ) : (
//                         <>
//                           <div className="clue-open-emoji">{card.emoji || "💡"}</div>
//                           <div className="clue-open-title">{card.title}</div>
//                           <div className="clue-open-text">{card.text}</div>
//                         </>
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               <div className="tap-answer-grid">
//                 {q.options?.map((option, index) => (
//                   <button
//                     key={index}
//                     className="tap-answer-btn"
//                     onClick={() => answerTapReveal(option)}
//                   >
//                     {option.text}
//                   </button>
//                 ))}
//               </div>

//               {!tapRevealAnswered && (
//                 <p className="mini-tip">Open the clue cards first, then answer.</p>
//               )}
//             </div>
//           )}

//           {questionType === "drag-drop" && (
//             <div className="activity-panel">
//               <div className="drag-instructions">
//                 Drag each item into the correct bucket, or use the quick buttons.
//               </div>

//               <div className="drag-bank">
//                 {availableItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className={`drag-item-card ${
//                       draggedItemId === item.id ? "drag-item-active" : ""
//                     }`}
//                     draggable
//                     onDragStart={() => handleDragStart(item.id)}
//                   >
//                     <div className="drag-item-emoji">{item.emoji || "📦"}</div>
//                     <div className="drag-item-label">{item.label || item.name}</div>

//                     <div className="quick-sort-row">
//                       <button
//                         className="quick-sort-btn"
//                         onClick={() => classifyItem(item, "need")}
//                       >
//                         {bucketLabels.need}
//                       </button>
//                       <button
//                         className="quick-sort-btn"
//                         onClick={() => classifyItem(item, "want")}
//                       >
//                         {bucketLabels.want}
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {feedback && (
//         <div className="answer-box" style={getFeedbackBoxStyle()}>
//           <h3 className="answer-title">{getFeedbackTitle()}</h3>
//           <p className="answer-text">{feedback}</p>
//         </div>
//       )}

//       <div className="lesson-actions">
//         <button className="context-btn" onClick={handleContext}>
//           Lesson Help
//         </button>

//         <button className="next-btn" onClick={handleNext} disabled={!isStepComplete}>
//           {currentQuestion === lesson.questions.length - 1 ? "Finish Lesson" : "Next"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Lesson;
import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import lessonsData from "../../data/lessons";
import { addCoins } from "../../coinUtils";
import "./Lesson.css";

const LESSON_REWARD = 10;
const UNIT_REWARD = 30;

function Lesson() {
  const { grade, unit, lessonId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const unitLessons = lessonsData[grade]?.[unit] || [];
  const lesson = unitLessons.find((item) => item.id === Number(lessonId));

  const initialQuestionFromState = Number.isInteger(location.state?.currentQuestion)
    ? location.state.currentQuestion
    : 0;

  const maxQuestionIndex =
    lesson && lesson.questions && lesson.questions.length > 0
      ? lesson.questions.length - 1
      : 0;

  const [currentQuestion, setCurrentQuestion] = useState(
    Math.min(initialQuestionFromState, maxQuestionIndex)
  );
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [isStepComplete, setIsStepComplete] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const [selectedBudgetItems, setSelectedBudgetItems] = useState([]);
  const [budgetSubmitted, setBudgetSubmitted] = useState(false);

  const [revealedCards, setRevealedCards] = useState([]);

  const [availableItems, setAvailableItems] = useState([]);
  const [needBucketItems, setNeedBucketItems] = useState([]);
  const [wantBucketItems, setWantBucketItems] = useState([]);
  const [draggedItemId, setDraggedItemId] = useState(null);

  const [showHintPopup, setShowHintPopup] = useState(false);
  const [hintMessage, setHintMessage] = useState("");

  const currentBudgetTotal = useMemo(() => {
    return selectedBudgetItems.reduce((sum, item) => sum + item.price, 0);
  }, [selectedBudgetItems]);

  useEffect(() => {
    if (!lesson || !lesson.questions || lesson.questions.length === 0) return;

    const clampedIndex = Math.min(currentQuestion, lesson.questions.length - 1);
    if (clampedIndex !== currentQuestion) {
      setCurrentQuestion(clampedIndex);
      return;
    }

    const q = lesson.questions[clampedIndex];
    const qType = q.type || lesson.type || "scenario-choice";

    setFeedback("");
    setFeedbackType("");
    setIsStepComplete(false);
    setWrongAttempts(0);
    setSelectedOptionIndex(null);

    setSelectedBudgetItems([]);
    setBudgetSubmitted(false);

    setRevealedCards([]);
    setDraggedItemId(null);

    setShowHintPopup(false);
    setHintMessage("");

    if (qType === "drag-drop") {
      setAvailableItems(q.items || []);
      setNeedBucketItems([]);
      setWantBucketItems([]);
    } else {
      setAvailableItems([]);
      setNeedBucketItems([]);
      setWantBucketItems([]);
    }
  }, [lesson, currentQuestion]);

  if (!lesson) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Lesson not found</h2>;
  }

  if (!lesson.questions || lesson.questions.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Lesson not found</h2>;
  }

  const q = lesson.questions[currentQuestion];
  if (!q) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Question not found</h2>;
  }

  const questionType = q.type || lesson.type || "scenario-choice";

  const getDefaultInstruction = () => {
    if (questionType === "scenario-choice") {
      return "Tap the best picture.";
    }

    if (questionType === "budget-builder") {
      return "Pick items for your budget.";
    }

    if (questionType === "tap-reveal") {
      return "Tap a clue card first.";
    }

    if (questionType === "drag-drop") {
      return "";
    }

    return "Tap a picture to start.";
  };

  const progress = ((currentQuestion + 1) / lesson.questions.length) * 100;

  const getMiniTitle = () => {
    return q.shortTitle || q.scenarioTitle || lesson.title;
  };

  const getMiniText = () => {
    return q.shortText || q.scenarioText;
  };

  const getMiniQuestion = () => {
    return q.shortQuestion || q.question;
  };

  const getOptionLabel = (option) => {
    return option.shortText || option.text;
  };

  const getHintFromLessonData = () => {
    return (
      q.hintPopup ||
      q.generalHint ||
      lesson.tips ||
      "Think carefully about the smartest money choice."
    );
  };

  const markLessonComplete = () => {
    const key = `progress_${grade}_${unit}`;
    const saved = JSON.parse(localStorage.getItem(key)) || [];

    if (!saved.includes(Number(lessonId))) {
      const updated = [...saved, Number(lessonId)];
      localStorage.setItem(key, JSON.stringify(updated));
      return updated;
    }

    return saved;
  };

  const awardLessonCoins = () => {
    const rewardKey = `coins_awarded_${grade}_${unit}_${lessonId}`;

    if (!localStorage.getItem(rewardKey)) {
      addCoins(LESSON_REWARD);
      localStorage.setItem(rewardKey, "true");
    }
  };

  const awardUnitCoins = (completedLessonCount) => {
    const totalLessonsInUnit = unitLessons.length;
    const unitRewardKey = `unit_reward_awarded_${grade}_${unit}`;

    if (
      totalLessonsInUnit > 0 &&
      completedLessonCount === totalLessonsInUnit &&
      !localStorage.getItem(unitRewardKey)
    ) {
      addCoins(UNIT_REWARD);
      localStorage.setItem(unitRewardKey, "true");
    }
  };

  const handleNext = () => {
    if (currentQuestion < lesson.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const completedLessons = markLessonComplete();
      awardLessonCoins();
      awardUnitCoins(completedLessons.length);
      navigate(`/lessons/${grade}/${unit}`);
    }
  };

  const handleContext = () => {
    setHintMessage(getHintFromLessonData());
    setShowHintPopup(true);
  };

  const getFeedbackClass = () => {
    if (feedbackType === "correct") return "feedback-pill feedback-correct";
    if (feedbackType === "hint") return "feedback-pill feedback-hint";
    if (feedbackType === "info") return "feedback-pill feedback-info";
    return "feedback-pill";
  };

  const getFeedbackTitle = () => {
    if (feedbackType === "correct") return "Awesome!";
    if (feedbackType === "hint") return "Try again";
    if (feedbackType === "info") return "Nice!";
    return "Tip";
  };

  const chooseScenarioOption = (option, index) => {
    setSelectedOptionIndex(index);

    if (option.isBest) {
      setFeedback(option.effect || "Awesome! That is the best choice.");
      setFeedbackType("correct");
      setIsStepComplete(true);
      return;
    }

    const nextWrongCount = wrongAttempts + 1;
    setWrongAttempts(nextWrongCount);
    setIsStepComplete(false);

    setFeedback(option.hint || q.generalHint || "Not quite. Tap the smarter picture.");
    setFeedbackType("hint");
  };

  const toggleBudgetItem = (item) => {
    const alreadySelected = selectedBudgetItems.some((picked) => picked.id === item.id);

    if (alreadySelected) {
      setSelectedBudgetItems((prev) => prev.filter((picked) => picked.id !== item.id));
      return;
    }

    setSelectedBudgetItems((prev) => [...prev, item]);
  };

  const submitBudgetBuilder = () => {
    const pickedIds = selectedBudgetItems.map((item) => item.id).sort();
    const correctIds = (q.correctItemIds || []).slice().sort();

    const sameLength = pickedIds.length === correctIds.length;
    const sameItems =
      sameLength && pickedIds.every((id, index) => id === correctIds[index]);
    const withinBudget = currentBudgetTotal <= (q.budget || 0);

    setBudgetSubmitted(true);

    if (sameItems && withinBudget) {
      setFeedback(q.successMessage || `Awesome! You stayed in $${q.budget}.`);
      setFeedbackType("correct");
      setIsStepComplete(true);
    } else if (!withinBudget) {
      setFeedback(`Too much! Stay under $${q.budget}.`);
      setFeedbackType("hint");
      setIsStepComplete(false);
    } else {
      setFeedback(q.generalHint || "Good try! Pick the more important items first.");
      setFeedbackType("hint");
      setIsStepComplete(false);
    }
  };

  const toggleRevealCard = (cardId) => {
    if (revealedCards.includes(cardId)) return;
    setRevealedCards((prev) => [...prev, cardId]);
  };

  const answerTapReveal = (option) => {
    if (option.isBest) {
      setFeedback(option.effect || "Nice job! You used the clues.");
      setFeedbackType("correct");
      setIsStepComplete(true);
    } else {
      setFeedback(option.hint || q.generalHint || "Not yet. Check the clues again.");
      setFeedbackType("hint");
      setIsStepComplete(false);
    }
  };

  const handleDragStart = (itemId) => {
    setDraggedItemId(itemId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const bucketLabels = q.bucketLabels || {
    need: "Needs",
    want: "Wants"
  };

  const classifyItem = (item, bucket) => {
    if (!item) return;

    const actualBucket = item.bucket || item.type;
    const label = item.label || item.name || "This item";
    const isCorrect = actualBucket === bucket;

    if (!isCorrect) {
      setFeedback(
        `${label} goes in ${actualBucket === "need" ? bucketLabels.need : bucketLabels.want}. Try again!`
      );
      setFeedbackType("hint");
      setIsStepComplete(false);
      return;
    }

    setAvailableItems((prev) => prev.filter((entry) => entry.id !== item.id));

    if (bucket === "need") {
      setNeedBucketItems((prev) => [...prev, item]);
    } else {
      setWantBucketItems((prev) => [...prev, item]);
    }

    const remainingCount = availableItems.length - 1;

    if (remainingCount === 0) {
      setFeedback("Awesome! You sorted all the items.");
      setFeedbackType("correct");
      setIsStepComplete(true);
    } else {
      setFeedback(`Nice! ${label} is in the right spot.`);
      setFeedbackType("info");
      setIsStepComplete(false);
    }
  };

  const handleDropToBucket = (bucket) => {
    if (!draggedItemId) return;
    const draggedItem = availableItems.find((item) => item.id === draggedItemId);
    classifyItem(draggedItem, bucket);
    setDraggedItemId(null);
  };

  const getContextImages = () => {
    const imgs = [];
    if (!lesson.context) return imgs;

    lesson.context.forEach((entry) => {
      if (Array.isArray(entry.example_img)) {
        entry.example_img.forEach((src) => {
          if (src) imgs.push(src);
        });
      }
    });

    return imgs;
  };

  const getVisualGallery = () => {
    const visuals = [];

    if (q.questionImg) {
      visuals.push({ src: q.questionImg, alt: "lesson visual" });
    }

    if (q.images?.length) {
      q.images.forEach((imgObj, index) => {
        if (imgObj?.questionImg) {
          visuals.push({
            src: imgObj.questionImg,
            alt: `lesson visual ${index + 1}`
          });
        }
      });
    }

    if (q.options?.length) {
      q.options.forEach((option, index) => {
        if (option.img) {
          visuals.push({
            src: option.img,
            alt: option.text || `option ${index + 1}`
          });
        }
      });
    }

    getContextImages().forEach((src, index) => {
      visuals.push({
        src,
        alt: `context visual ${index + 1}`
      });
    });

    const seen = new Set();
    return visuals
      .filter((item) => {
        if (!item.src || seen.has(item.src)) return false;
        seen.add(item.src);
        return true;
      })
      .slice(0, 6);
  };

  const renderHero = () => {
    const gallery = getVisualGallery();

    if (gallery.length > 0) {
      const mainImage = gallery[0];
      const extraImages = gallery.slice(1, 5);

      return (
        <div className="hero-gallery">
          <div className="hero-main-image-wrap">
            <img
              src={mainImage.src}
              className="hero-main-image"
              alt={mainImage.alt}
            />
            <div className="hero-badge">✨ Picture clue</div>
          </div>

          {extraImages.length > 0 && (
            <div className="hero-thumb-row">
              {extraImages.map((item, index) => (
                <img
                  key={`${item.src}-${index}`}
                  src={item.src}
                  className="hero-thumb"
                  alt={item.alt}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="lesson-shell">
      <div className="lesson-container">
        <div className="lesson-topbar">
          <div className="progress-wrap">
            <div className="lesson-progress-text">
              <span className="progress-chip">Lesson {lessonId}</span>
              <span className="progress-chip">
                {currentQuestion + 1} / {lesson.questions.length}
              </span>
            </div>

            <div className="progress-bar-border">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        {showHintPopup && (
          <div className="hint-popup">
            <div className="hint-popup-content">
              <span className="hint-popup-icon">💡</span>
              <div className="hint-popup-text">
                <strong>Hint:</strong> {hintMessage}
              </div>
              <button
                className="hint-popup-close"
                onClick={() => setShowHintPopup(false)}
                aria-label="Close hint"
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className="questions-container">
          <div className="left-container">
            <div className={`scenario-box ${questionType === "budget-builder" ? "scenario-box-budget" : ""}`}>
              {questionType === "budget-builder" && (
                <div className="scenario-top-row">
                  <div
                    className={`budget-total-card budget-total-card-inline ${
                      currentBudgetTotal > (q.budget || 0) ? "over-budget" : ""
                    }`}
                  >
                    <span>Total</span>
                    <strong>
                      ${currentBudgetTotal} / ${q.budget}
                    </strong>
                  </div>
                </div>
              )}

              <h3 className="scenario-title">{getMiniTitle()}</h3>

              {getMiniText() && <p className="scenario-text">{getMiniText()}</p>}

              {(q.walletAmount !== undefined ||
                q.goal ||
                (q.budget !== undefined && questionType !== "budget-builder")) && (
                <div className="scenario-stats">
                  {q.walletAmount !== undefined && (
                    <div className="scenario-pill">
                      <strong>💰</strong> ${q.walletAmount}
                    </div>
                  )}
                  {q.budget !== undefined && questionType !== "budget-builder" && (
                    <div className="scenario-pill">
                      <strong>🛒</strong> ${q.budget}
                    </div>
                  )}
                  {q.goal && (
                    <div className="scenario-pill">
                      <strong>🎯</strong> {q.goal}
                    </div>
                  )}
                </div>
              )}

              <h4 className="question-text">{getMiniQuestion()}</h4>
            </div>

            {renderHero()}
          </div>

          <div className="option-container">
            {questionType === "scenario-choice" && (
              <>
                {q.options?.map((option, index) => (
                  <button
                    className={`option-btn ${selectedOptionIndex === index ? "selected-option" : ""}`}
                    key={index}
                    onClick={() => chooseScenarioOption(option, index)}
                  >
                    <div className="option-top">
                      {option.img ? (
                        <img src={option.img} className="option-img" alt={option.text} />
                      ) : (
                        <div className="option-emoji">{option.emoji || "⭐"}</div>
                      )}
                    </div>

                    <div className="option-copy">
                      <p className="option-txt">{getOptionLabel(option)}</p>
                    </div>
                  </button>
                ))}
              </>
            )}

            {questionType === "budget-builder" && (
              <div className="activity-panel">
                <div className="budget-grid">
                  {q.items?.map((item) => {
                    const isPicked = selectedBudgetItems.some((picked) => picked.id === item.id);

                    return (
                      <button
                        key={item.id}
                        className={`budget-item-card ${isPicked ? "budget-item-selected" : ""}`}
                        onClick={() => toggleBudgetItem(item)}
                      >
                        <div className="budget-item-emoji">{item.emoji || "🛍️"}</div>
                        {item.img && (
                          <img src={item.img} alt={item.name} className="budget-item-img" />
                        )}
                        <div className="budget-item-name">{item.name}</div>
                        <div className="budget-item-price">${item.price}</div>
                      </button>
                    );
                  })}
                </div>

                <button className="check-btn" onClick={submitBudgetBuilder}>
                  Check
                </button>

                {budgetSubmitted && q.showAnswerTip && (
                  <p className="mini-tip">Pick needs first.</p>
                )}
              </div>
            )}

            {questionType === "tap-reveal" && (
              <div className="activity-panel">
                <div className="clue-grid">
                  {q.cards?.map((card) => {
                    const isOpen = revealedCards.includes(card.id);

                    return (
                      <button
                        key={card.id}
                        className={`clue-card ${isOpen ? "clue-card-open" : ""}`}
                        onClick={() => toggleRevealCard(card.id)}
                      >
                        {!isOpen ? (
                          <>
                            <div className="clue-cover-emoji">{card.coverEmoji || "🃏"}</div>
                            <div className="clue-cover-text">Tap</div>
                          </>
                        ) : (
                          <>
                            <div className="clue-open-emoji">{card.emoji || "💡"}</div>
                            <div className="clue-open-title">{card.title}</div>
                            <div className="clue-open-text">{card.text}</div>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="tap-answer-grid">
                  {q.options?.map((option, index) => (
                    <button
                      key={index}
                      className="tap-answer-btn"
                      onClick={() => answerTapReveal(option)}
                    >
                      {getOptionLabel(option)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {questionType === "drag-drop" && (
              <div className="activity-panel activity-panel-drag">
                <div className="drag-layout">
                  <div className="drag-buckets-panel">
                    <div className="drag-buckets-title">Drop Zone</div>

                    <div className="drag-drop-zone-list">
                      <div
                        className={`drop-zone need-zone ${draggedItemId ? "drop-zone-ready" : ""}`}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDropToBucket("need")}
                      >
                        <h4>{bucketLabels.need}</h4>
                        <p className="drop-zone-mini">Must-have items</p>

                        <div className="sorted-items">
                          {needBucketItems.map((item) => (
                            <div key={item.id} className="sorted-pill">
                              <span>{item.emoji || "✅"}</span>
                              <span>{item.label || item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`drop-zone want-zone ${draggedItemId ? "drop-zone-ready" : ""}`}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDropToBucket("want")}
                      >
                        <h4>{bucketLabels.want}</h4>
                        <p className="drop-zone-mini">Fun extras</p>

                        <div className="sorted-items">
                          {wantBucketItems.map((item) => (
                            <div key={item.id} className="sorted-pill">
                              <span>{item.emoji || "✅"}</span>
                              <span>{item.label || item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="drag-items-panel">
                    <div className="drag-items-title">Pick a Picture</div>

                    <div className="drag-bank">
                      {availableItems.map((item) => (
                        <div
                          key={item.id}
                          className={`drag-item-card ${draggedItemId === item.id ? "drag-item-active" : ""}`}
                          draggable
                          onDragStart={() => handleDragStart(item.id)}
                        >
                          <div className="drag-item-glow"></div>

                          {item.img ? (
                            <img src={item.img} alt={item.name} className="drag-item-img" />
                          ) : (
                            <div className="drag-item-emoji">{item.emoji || "📦"}</div>
                          )}

                          <div className="drag-item-label">
                            {item.label || item.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="lesson-sticky-bar">
        <div className="lesson-sticky-inner">
          <div className="sticky-feedback-wrap">
            {feedback ? (
              <div className={getFeedbackClass()}>
                <strong>{getFeedbackTitle()}</strong>
                <span>{feedback}</span>
              </div>
            ) : getDefaultInstruction() ? (
              <div className="feedback-pill feedback-empty">
                <span>{getDefaultInstruction()}</span>
              </div>
            ) : null}
          </div>

          <div className="sticky-actions">
            <button className="context-btn" onClick={handleContext}>
              Hint
            </button>

            <button className="next-btn" onClick={handleNext} disabled={!isStepComplete}>
              {currentQuestion === lesson.questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson;