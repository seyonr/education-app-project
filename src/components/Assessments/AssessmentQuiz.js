import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import assessmentsData from "../../data/assessments";
import "./Assessments.css";

function AssessmentQuiz() {
  const { grade, unit } = useParams();
  const navigate = useNavigate();

  const gradeKey = grade?.startsWith("grade") ? grade : `grade${grade}`;
  const assessment = assessmentsData[gradeKey]?.[unit];

  const questions = useMemo(() => {
    const base = assessment?.questions ? [...assessment.questions] : [];
    for (let i = base.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [base[i], base[j]] = [base[j], base[i]];
    }
    return base;
  }, [assessment]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  useEffect(() => {
    setCurrentIndex(0);
    setAnswers(Array(questions.length).fill(null));
  }, [questions]);

  if (!assessment) {
    return (
      <div className="assessment-container">
        <h1 className="assessment-title">Assessment</h1>
        <p className="assessment-subtitle">Quiz not found.</p>
        <button
          className="assessment-action"
          onClick={() => navigate(`/assessments/${grade}`)}
        >
          Back to Assessments
        </button>
      </div>
    );
  }

  const question = questions[currentIndex];
  const selectedIndex = answers[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const questionType = question?.type || "multiple-choice";
  const questionTypeLabel = questionType === "true-false" ? "True / False" : "Multiple Choice";

  const selectAnswer = (index) => {
    const updated = [...answers];
    updated[currentIndex] = index;
    setAnswers(updated);
  };

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const submitQuiz = () => {
    navigate(`/assessment/${grade}/${unit}/results`, {
      state: { answers, questionOrder: questions.map((item) => item.id) }
    });
  };

  return (
    <div className="assessment-container">
      <div className="assessment-header">
        <h1 className="assessment-title">{assessment.title}</h1>
        <div className="assessment-subtitle">Question {currentIndex + 1} of {questions.length}</div>
      </div>

      <div className="assessment-progress">
        <div className="assessment-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="assessment-question-card">
        <div className="assessment-question-header">
          <div className="assessment-question">{question.question}</div>
          <div className="assessment-type">{questionTypeLabel}</div>
        </div>
        <div className="assessment-options">
          {question.options.map((option, index) => (
            <button
              key={option}
              className={`assessment-option ${selectedIndex === index ? "selected" : ""}`}
              onClick={() => selectAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="assessment-actions">
        <button
          className="assessment-action"
          onClick={goPrev}
          disabled={currentIndex === 0}
        >
          Back
        </button>

        {currentIndex < questions.length - 1 ? (
          <button
            className="assessment-action primary"
            onClick={goNext}
            disabled={selectedIndex === null}
          >
            Next
          </button>
        ) : (
          <button
            className="assessment-action primary"
            onClick={submitQuiz}
            disabled={selectedIndex === null}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default AssessmentQuiz;
