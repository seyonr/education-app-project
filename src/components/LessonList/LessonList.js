import React from "react";
import { useParams } from "react-router-dom";
import lessonsData from "../../data/lessons";
import "./LessonList.css";

function LessonList() {
  const { grade, unit } = useParams();
  const lessons = lessonsData[grade][unit];

  return (
    <section className="lesson-list-page">
      <h1>{unit.toUpperCase()}</h1>

      {lessons.map((lesson) => (
        <div key={lesson.id} className="lesson-card">
          {lesson.title}
        </div>
      ))}
    </section>
  );
}

export default LessonList;
