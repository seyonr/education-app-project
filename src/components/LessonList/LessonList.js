import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import lessonsData from "../../data/lessons";
import "./LessonList.css";

function LessonList() {

  const { grade, unit } = useParams();
  const navigate = useNavigate();

  const lessons = lessonsData[grade][unit];

  if (!lessons) {
    return <h2>Lessons not found</h2>;
  }

  return (
    <section className="lesson-list-page">

      <h1>{unit.toUpperCase()}</h1>

      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          onClick={() => navigate(`/lessonIntro/${grade}/${unit}/${lesson.id}`)}
          className="lesson-card"
        >
          {lesson.title}
        </div>
      ))}

    </section>
  );
}

export default LessonList;