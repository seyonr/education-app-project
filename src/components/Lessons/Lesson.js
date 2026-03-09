import React, { useState } from 'react'
import { useParams, useNavigate, useLocation } from "react-router-dom";
import lessonsData from "../../data/lessons";
import "./Lesson.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';


function Lesson() {
    const { grade, unit, lessonId } = useParams();
    const navigate = useNavigate();
    
    const unitLesson = lessonsData[grade][unit];

    const location = useLocation();
    const initalQuestion = location.state?.currentQuestion ?? 0;



    const [currentQuestion, setCurrentQuestion] = useState(initalQuestion)
    const [feedback, setFeedback] = useState("")
    const [feedbackClass, setFeedbackClass] = useState("");
    const [isSelected, setIsSelected] = useState(false);
    if (!unitLesson) {
        return <h2>Unit not found</h2>;
    }

    const lessons = unitLesson.find((l) => l.id === Number(lessonId))

    if (!lessons || lessons.questions.length === 0) {
            return <h2>Lesson not found</h2>;
        }

    const q = lessons.questions[currentQuestion];
    const progress = ((currentQuestion +1) / lessons.questions.length) * 100;

    const handleNext = () => {
        if (currentQuestion < lessons.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setIsSelected(false)
            setFeedback("")
            setFeedbackClass("");
        }
        else {
            navigate("/");
        }
    }

    const handleContext = () => {
        navigate(`/lessonIntro/${grade}/${unit}/${lessonId}`, {
            state: {
                currentQuestion: currentQuestion
            }
        });

    }

    function checkAns(option) {
        if (option === q.correctAns){
            setFeedback(q.correctFeedback || "Good Job!")
            setFeedbackClass("correct-ans")
            setIsSelected(true)


        }
        else{ 
            setFeedback(q.wrongFeedback || "Not quite try again. Refer to the context.")
            setFeedbackClass("incorrect-ans")
            setIsSelected(false)

            
        }

    }


    return (
    <div className='lesson-container'>

        <div className="progress-bar-border"
        >
            <div className="progress" style={{
            width: `${progress}%`
        }}></div>
        </div>

        <p className='lesson-title'>Lesson {lessonId} - {lessons.title}</p>

        <div className="questions-container">
            <div className="left-container">
                <h4 className='question-text'>{q.question}</h4>

                <img src={q.images[0].questionImg} width={400} height={250} alt="" />

            </div>
            <br />

            <div className="option-container">
                { q.options.map((option, index) => (
             
                    <div className='option-btn' key={index} onClick={() => checkAns(option.text)}>
                        <div>
                            <p className='option-txt'>{option.text}</p>
                            <p className='option-subtxt'>{option.subText}</p>
                        </div>
                        
                        <img src={option.img}  width={100} height={100} alt="" />
                        
                        </div>    
               
                
                ))}
            </div>
        </div>
        
        <h3 className={`${feedbackClass} answer`}>{feedback}</h3>
        
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "75%"
        }}>
            <button className='context-btn' onClick={handleContext}>
                <FontAwesomeIcon icon={faLightbulb} /> Refer to context
            </button>
            <button className="next-btn" onClick={handleNext} disabled={!isSelected}>
                {currentQuestion === lessons.questions.length - 1 ? "Finish" :<>Next  &rarr;</>} 
            </button>
        </div>
    </div>
  )
}

export default Lesson