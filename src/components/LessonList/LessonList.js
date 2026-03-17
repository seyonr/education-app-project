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
  const isComplete = lessons.length > 0 && completedLessons.length === lessons.length;
  const gradeParam = grade.startsWith("grade") ? grade.replace("grade", "") : grade;
  const nextLesson = lessons.find((lesson) => !completedLessons.includes(lesson.id)) || lessons[0];

  return (
    <section className="lesson-list-page">
      <div className="lesson-layout">
        <div className="lesson-main">
          <div className="lesson-hero">
            <div>
              <div className="lesson-badge">Grade {gradeParam}</div>
              <h1>{unit.toUpperCase()}</h1>
              <p>Finish each lesson to unlock the unit quiz.</p>
            </div>
            <div className="lesson-progress-card">
              <div className="lesson-progress-title">Unit Progress</div>
              <div className="lesson-progress-count">
                {completedLessons.length}/{lessons.length} lessons
              </div>
              <div className="lesson-progress-track">
                <div className="lesson-progress-fill" style={{ width: `${progressPercent}%` }} />
              </div>
              <div className="lesson-progress-percent">{Math.round(progressPercent)}% complete</div>
            </div>
          </div>

          <div className="lesson-grid">
            {lessons.map((lesson) => {
              const done = completedLessons.includes(lesson.id);

              return (
                <button
                  key={lesson.id}
                  onClick={() => navigate(`/lessonIntro/${grade}/${unit}/${lesson.id}`)}
                  className={`lesson-card ${done ? "done" : ""}`}
                >
                  <div className="lesson-card-title">{lesson.title}</div>
                  <div className={`lesson-status ${done ? "done" : "new"}`}>
                    {done ? "Completed" : "Start"}
                  </div>
                </button>
              );
            })}
          </div>

          {isComplete && (
            <div className="lesson-quiz-card">
              <div className="lesson-quiz-title">Unit complete!</div>
              <div className="lesson-quiz-subtitle">Try the unit quiz to earn extra coins.</div>
              <button
                className="lesson-quiz-button"
                onClick={() => navigate(`/assessment/${gradeParam}/${unit}`)}
              >
                Take Unit Quiz
              </button>
            </div>
          )}
        </div>

        <aside className="lesson-side">
          <div className="lesson-side-card highlight">
            <div className="lesson-side-title">Up Next</div>
            <div className="lesson-side-main">{nextLesson?.title}</div>
            <div className="lesson-side-sub">Keep going to unlock the quiz.</div>
            <button
              className="lesson-side-button"
              onClick={() => navigate(`/lessonIntro/${grade}/${unit}/${nextLesson?.id}`)}
            >
              Start Next Lesson
            </button>
          </div>

          <div className="lesson-side-card">
            <div className="lesson-side-title">Unit Checklist</div>
            <ul className="lesson-checklist">
              {lessons.map((lesson) => {
                const done = completedLessons.includes(lesson.id);
                return (
                  <li key={lesson.id} className={done ? "done" : ""}>
                    <span>{lesson.title}</span>
                    <span>{done ? "✓" : "•"}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lesson-side-card">
            <div className="lesson-side-title">Quiz Reward</div>
            <div className="lesson-side-main">Up to 20 coins</div>
            <div className="lesson-side-sub">Finish the unit to unlock the quiz.</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default LessonList;