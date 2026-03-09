import React from 'react'
import { useParams, useNavigate, useLocation } from "react-router-dom";
import lessonsData from "../../data/lessons";
import "./LessonIntro.css"

function LessonIntro() {

    

    const { grade, unit, lessonId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const savedQuestion = location.state?.currentQuestion ?? 0;

    const unitLesson = lessonsData[grade]?.[unit];

    if (!unitLesson) {
        return <h2>Unit not found</h2>;
    }

    const lesson = unitLesson.find((l) => l.id === Number(lessonId));

    if (!lesson) {
        return <h2>Lesson not found</h2>;
    }

    const startLesson = () => {
        navigate(`/lesson/lessons/${grade}/${unit}/${lessonId}`, {
            state: {
                currentQuestion: savedQuestion
            }
        });
    }

    return (
        <div className='context-page'>

            <p className='lesson-title'>
                Lesson {lessonId} - {lesson.title}
            </p>

            <div className="context-container">

                {lesson.context?.map((item, index) => (
                    <div key={index} className="context-card">

                        <h2 className="context-term">
                            {item.term}
                        </h2>

                        <p className="context-definition">
                            {item.definition}
                        </p>

                        <div className="context-images">
                            {item.example_img.map((img, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={img}
                                    alt={`${item.term} example ${imgIndex + 1}`}
                                    className="context-img"
                                />
                            ))}
                        </div>

                    </div>
                ))}

            </div>

            {lesson.tips  &&(
            <div className="tip-box">
                💡 Tip: {lesson.tips}
            </div>
            )}
            <button onClick={startLesson} className='startLesson-btn'>
               {savedQuestion > 0 ? "Continue Lesson": <>Start Lesson &rarr;</> } 
            </button>

        </div>
    )
}

export default LessonIntro;