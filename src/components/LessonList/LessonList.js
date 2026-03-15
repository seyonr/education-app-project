// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import lessonsData from "../../data/lessons";
// import "./LessonList.css";

// function LessonList() {

//   const { grade, unit } = useParams();
//   const navigate = useNavigate();

//   const lessons = lessonsData[grade][unit];

//   if (!lessons) {
//     return <h2>Lessons not found</h2>;
//   }

//   return (
//     <section className="lesson-list-page">

//       <h1>{unit.toUpperCase()}</h1>

//       {lessons.map((lesson) => (
//         <div
//           key={lesson.id}
//           onClick={() => navigate(`/lessonIntro/${grade}/${unit}/${lesson.id}`)}
//           className="lesson-card"
//         >
//           {lesson.title}
//         </div>
//       ))}

//     </section>
//   );
// }

// export default LessonList;


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

  const progressKey = `progress_${grade}_${unit}`;
  const completedLessons = JSON.parse(localStorage.getItem(progressKey)) || [];
  const progressPercent = (completedLessons.length / lessons.length) * 100;

  return (
    <section className="lesson-list-page">
      <h1>{unit.toUpperCase()}</h1>

      <div style={{ width: "320px", marginBottom: "20px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
          Unit Progress: {completedLessons.length}/{lessons.length}
        </div>
        <div
          style={{
            width: "100%",
            height: "16px",
            background: "#e5e7eb",
            borderRadius: "999px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: "100%",
              background: "#A78BFA",
              borderRadius: "999px"
            }}
          />
        </div>
      </div>

      {lessons.map((lesson) => {
        const done = completedLessons.includes(lesson.id);

        return (
          <div
            key={lesson.id}
            onClick={() => navigate(`/lessonIntro/${grade}/${unit}/${lesson.id}`)}
            className="lesson-card"
            style={{
              border: done ? "3px solid #34d399" : "none"
            }}
          >
            {lesson.title} {done ? "✅" : ""}
          </div>
        );
      })}
    </section>
  );
}

export default LessonList;