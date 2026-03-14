// import React, { useState } from 'react'
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import lessonsData from "../../data/lessons";
// import "./Lesson.css"
// import DragandDropLesson from '../DragandDropLesson/DragandDropLesson';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLightbulb } from '@fortawesome/free-regular-svg-icons';


// function Lesson() {
//     const { grade, unit, lessonId } = useParams();
//     const navigate = useNavigate();
    
//     const unitLesson = lessonsData[grade][unit];

//     const location = useLocation();
//     const initalQuestion = location.state?.currentQuestion ?? 0;



//     const [currentQuestion, setCurrentQuestion] = useState(initalQuestion)
//     const [feedback, setFeedback] = useState("")
//     const [feedbackClass, setFeedbackClass] = useState("");
//     const [isSelected, setIsSelected] = useState(false);
//     if (!unitLesson) {
//         return <h2>Unit not found</h2>;
//     }

//     const lessons = unitLesson.find((l) => l.id === Number(lessonId))

//     if (!lessons || lessons.questions.length === 0) {
//             return <h2>Lesson not found</h2>;
//         }
// if (lessons.type === "drag-drop") {
//     return (
//         <DragandDropLesson
//             lesson={lessons}
//             grade={grade}
//             unit={unit}
//             lessonId={lessonId}
//         />
//     );
// }
//     const q = lessons.questions[currentQuestion];
//     const progress = ((currentQuestion +1) / lessons.questions.length) * 100;

//     const handleNext = () => {
//         if (currentQuestion < lessons.questions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//             setIsSelected(false)
//             setFeedback("")
//             setFeedbackClass("");
//         }
//         else {
//             navigate("/");
//         }
//     }

//     const handleContext = () => {
//         navigate(`/lessonIntro/${grade}/${unit}/${lessonId}`, {
//             state: {
//                 currentQuestion: currentQuestion
//             }
//         });

//     }

//     function checkAns(option) {
//         if (option === q.correctAns){
//             setFeedback(q.correctFeedback || "Good Job!")
//             setFeedbackClass("correct-ans")
//             setIsSelected(true)


//         }
//         else{ 
//             setFeedback(q.wrongFeedback || "Not quite try again. Refer to the context.")
//             setFeedbackClass("incorrect-ans")
//             setIsSelected(false)

            
//         }

//     }


//     return (
//     <div className='lesson-container'>

//         <div className="progress-bar-border"
//         >
//             <div className="progress" style={{
//             width: `${progress}%`
//         }}></div>
//         </div>

//         <p className='lesson-title'>Lesson {lessonId} - {lessons.title}</p>

//         <div className="questions-container">
//             <div className="left-container">
//                 <h4 className='question-text'>{q.question}</h4>

//                 <img src={q.images[0].questionImg} width={400} height={250} alt="" />

//             </div>
//             <br />

//             <div className="option-container">
//                 { q.options.map((option, index) => (
             
//                     <div className='option-btn' key={index} onClick={() => checkAns(option.text)}>
//                         <div>
//                             <p className='option-txt'>{option.text}</p>
//                             {/* <p className='option-subtxt'>{option.subText}</p> */}
//                         </div>
                        
//                         <img src={option.img}  width={100} height={100} alt="" />
                        
//                         </div>    
               
                
//                 ))}
//             </div>
//         </div>
        
//         <h3 className={`${feedbackClass} answer`}>{feedback}</h3>
        
//         <div style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             width: "75%"
//         }}>
//             <button className='context-btn' onClick={handleContext}>
//                 <FontAwesomeIcon icon={faLightbulb} /> Refer to context
//             </button>
//             <button className="next-btn" onClick={handleNext} disabled={!isSelected}>
//                 {currentQuestion === lessons.questions.length - 1 ? "Finish" :<>Next  &rarr;</>} 
//             </button>
//         </div>
//     </div>
//   )
// }

// export default Lesson

// import { faLightbulb, faArrowRight } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react'
import { useParams, useNavigate, useLocation } from "react-router-dom";
import lessonsData from "../../data/lessons";
import "./Lesson.css"
import DragandDropLesson from '../DragandDropLesson/DragandDropLesson';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

function Lesson() {
    const { grade, unit, lessonId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const unitLesson = lessonsData[grade]?.[unit];
    const initialQuestion = location.state?.currentQuestion ?? 0;

    const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
    const [feedback, setFeedback] = useState("");
    const [feedbackClass, setFeedbackClass] = useState("");
    const [isSelected, setIsSelected] = useState(false);

    if (!unitLesson) {
        return <h2>Unit not found</h2>;
    }

    const lesson = unitLesson.find((l) => l.id === Number(lessonId));

    if (!lesson || lesson.questions.length === 0) {
        return <h2>Lesson not found</h2>;
    }

    // Drag-and-drop lesson
    if (lesson.type === "drag-drop") {
        return (
            <DragandDropLesson
                lesson={lesson}
                grade={grade}
                unit={unit}
                lessonId={lessonId}
            />
        );
    }

    const q = lesson.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / lesson.questions.length) * 100;

    const handleNext = () => {
        if (currentQuestion < lesson.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setIsSelected(false);
            setFeedback("");
            setFeedbackClass("");
        } else {
            navigate("/");
        }
    };

    const handleContext = () => {
        navigate(`/lessonIntro/${grade}/${unit}/${lessonId}`, {
            state: {
                currentQuestion: currentQuestion
            }
        });
    };

    // Scenario-based choice handler
    function chooseOption(option) {
        setFeedback(option.effect || "You made a choice.");
        setFeedbackClass(option.isBest ? "correct-ans" : "incorrect-ans");
        setIsSelected(true);
    }

    return (
        <div className='lesson-container'>
            <div className="progress-bar-border">
                <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <p className='lesson-title'>
                Lesson {lessonId} - {lesson.title}
            </p>

            <div className="questions-container">
                <div className="left-container">
                    <div className="scenario-box">
                        {q.scenarioTitle && (
                            <h3 className="scenario-title">{q.scenarioTitle}</h3>
                        )}

                        {q.scenarioText && (
                            <p className="scenario-text">{q.scenarioText}</p>
                        )}

                        {(q.walletAmount !== undefined || q.goal) && (
                            <div className="scenario-stats">
                                {q.walletAmount !== undefined && (
                                    <div className="scenario-pill">💰 ${q.walletAmount}</div>
                                )}
                                {q.goal && (
                                    <div className="scenario-pill">🎯 {q.goal}</div>
                                )}
                            </div>
                        )}

                        <h4 className='question-text'>{q.question}</h4>
                    </div>

                    {q.images?.[0]?.questionImg && (
                        <img
                            src={q.images[0].questionImg}
                            className="question-img"
                            alt="lesson scenario"
                        />
                    )}
                </div>

                <div className="option-container">
                    {q.options?.map((option, index) => (
                        <div
                            className='option-btn'
                            key={index}
                            onClick={() => chooseOption(option)}
                        >
                            <img
                                src={option.img}
                                className="option-img"
                                alt={option.text}
                                height={200}
                                width={200}
                            />

                            <p className='option-txt'>{option.text}</p>

                            {/* {option.subText && (
                                <p className='option-subtxt'>{option.subText}</p>
                            )} */}
                        </div>
                    ))}
                </div>
            </div>

            {feedback && (
                <div className={`answer-box ${feedbackClass}`}>
                    <h3 className="answer-title">
                        {feedbackClass === "correct-ans" ? "Great choice!" : "That choice has a result"}
                    </h3>
                    <p className="answer-text">{feedback}</p>
                </div>
            )}

            <div className="lesson-actions">
                <button className='context-btn' onClick={handleContext}>
                    <FontAwesomeIcon icon={faLightbulb} /> Hint
                </button>

                <button
                    className="next-btn"
                    onClick={handleNext}
                    disabled={!isSelected}
                >
                    {currentQuestion === lesson.questions.length - 1 ? "Finish" : <>Next &rarr;</>}
                </button>
            </div>
        </div>
    )
}

export default Lesson;