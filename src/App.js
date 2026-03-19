// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import HomePage from './components/HomePage/HomePage';
// import PetShop from './components/PetShop/PetShop';
// import GradeSelect from "./components/GradeSelect/GradeSelect";
// import Units from "./components/Units/Units";
// import LessonList from "./components/LessonList/LessonList";
// import Lessons from "./components/Lessons/Lesson";
// import LessonIntro from "./components/LessonIntro/LessonIntro";
// import SimulatorGame from './components/SimulatorGame/SimulatorGame';
// import AssessmentsPage from "./components/Assessments/AssessmentsPage";
// import AssessmentQuiz from "./components/Assessments/AssessmentQuiz";
// import AssessmentResults from "./components/Assessments/AssessmentResults";
// import Investments from "./components/Investments/Investments";

// import { getGradeCookie } from "./cookieUtils";

// function App() {

//   const grade = getGradeCookie();

//   return (
//     <Router>

//       <Navbar/>

//       <Routes>

//         {/* Main entry */}
//         <Route
//           path="/"
//           element={grade ? <Navigate to="/dashboard"/> : <GradeSelect/>}
//         />

//         {/* Safety redirect for old route */}
//         <Route path="/grade" element={<Navigate to="/" />} />

//         {/* Dashboard */}
//         <Route path="/dashboard" element={<HomePage/>} />

//         {/* Lessons */}
//         <Route path="/units/:grade" element={<Units />} />
//         <Route path="/lessons/:grade/:unit" element={<LessonList />} />
//         <Route path="/lessonIntro/:grade/:unit/:lessonId" element={<LessonIntro/>} />
//         <Route path="/lesson/lessons/:grade/:unit/:lessonId" element={<Lessons/>} />

//         {/* Assessments */}
//         <Route path="/assessments/:grade" element={<AssessmentsPage />} />
//         <Route path="/assessment/:grade/:unit" element={<AssessmentQuiz />} />
//         <Route path="/assessment/:grade/:unit/results" element={<AssessmentResults />} />

//         {/* Other */}
//         <Route path="/pet-shop" element={<PetShop/>}/>
//         <Route path="/investments" element={<Investments />} />
//         <Route path="/simulation/:grade/:gameId" element={<SimulatorGame />} />


//       </Routes>

//     </Router>
//   );
// }

// export default App;


import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import HomePage from './components/HomePage/HomePage';
import PetShop from './components/PetShop/PetShop';
import GradeSelect from "./components/GradeSelect/GradeSelect";
import Units from "./components/Units/Units";
import LessonList from "./components/LessonList/LessonList";
import Lessons from "./components/Lessons/Lesson";
import LessonIntro from "./components/LessonIntro/LessonIntro";
import SimulatorGame from './components/SimulatorGame/SimulatorGame';
import AssessmentsPage from "./components/Assessments/AssessmentsPage";
import AssessmentQuiz from "./components/Assessments/AssessmentQuiz";
import AssessmentResults from "./components/Assessments/AssessmentResults";
import Investments from "./components/Investments/Investments";

import { getGradeCookie } from "./cookieUtils";

function App() {

  // 🔥 Make grade reactive
  const [grade, setGrade] = useState(getGradeCookie());

  // 🔥 Keep grade in sync with cookie (fixes your bug)
  useEffect(() => {
    const interval = setInterval(() => {
      const current = getGradeCookie();
      setGrade(current);
    }, 300); // fast enough, no lag

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>

      <Navbar/>

      <Routes>

        {/* Main entry */}
        {/* <Route
          path="/"
          element={grade ? <Navigate to="/dashboard" replace /> : <GradeSelect />}
        /> */}

        <Route
  path="/"
  element={
    grade
      ? <Navigate to="/dashboard" replace />
      : <GradeSelect key={Date.now()} />
  }
/>

        {/* Safety redirect */}
        <Route path="/grade" element={<Navigate to="/" replace />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={grade ? <HomePage/> : <Navigate to="/" replace />}
        />

        {/* Lessons */}
        <Route path="/units/:grade" element={<Units />} />
        <Route path="/lessons/:grade/:unit" element={<LessonList />} />
        <Route path="/lessonIntro/:grade/:unit/:lessonId" element={<LessonIntro/>} />
        <Route path="/lesson/lessons/:grade/:unit/:lessonId" element={<Lessons/>} />

        {/* Assessments */}
        <Route path="/assessments/:grade" element={<AssessmentsPage />} />
        <Route path="/assessment/:grade/:unit" element={<AssessmentQuiz />} />
        <Route path="/assessment/:grade/:unit/results" element={<AssessmentResults />} />

        {/* Other */}
        <Route path="/pet-shop" element={<PetShop/>}/>
        <Route path="/investments" element={<Investments />} />
        <Route path="/simulation/:grade/:gameId" element={<SimulatorGame />} />

      </Routes>

    </Router>
  );
}

export default App;