import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import PetShop from './components/PetShop/PetShop';
import GradeSelect from "./components/GradeSelect/GradeSelect";
import Units from "./components/Units/Units";
import LessonList from "./components/LessonList/LessonList";
import Lessons from "./components/Lessons/Lesson";
import LessonIntro from "./components/LessonIntro/LessonIntro";
import SimulatorGame from './components/SimulatorGame/SimulatorGame';

import { getGradeCookie } from "./cookieUtils";

function App() {

  const grade = getGradeCookie();

  return (
    <Router>

      <Navbar/>

      <Routes>

        {/* Main entry */}
        <Route
          path="/"
          element={grade ? <Navigate to="/dashboard"/> : <GradeSelect/>}
        />

        {/* Safety redirect for old route */}
        <Route path="/grade" element={<Navigate to="/" />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<HomePage/>} />

        {/* Lessons */}
        <Route path="/units/:grade" element={<Units />} />
        <Route path="/lessons/:grade/:unit" element={<LessonList />} />
        <Route path="/lessonIntro/:grade/:unit/:lessonId" element={<LessonIntro/>} />
        <Route path="/lesson/lessons/:grade/:unit/:lessonId" element={<Lessons/>} />

        {/* Other */}
        <Route path="/pet-shop" element={<PetShop/>}/>
        
        <Route path="/simulation/:grade/:gameId" element={<SimulatorGame />} />


      </Routes>

    </Router>
  );
}

export default App;