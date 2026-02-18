import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import SignUp from './components/Sign Up/SignUp';
import SignIn from './components/Sign In/SignIn';
import HomePage from './components/HomePage/HomePage';
import PetShop from './components/PetShop/PetShop';
import Grade from "./components/Grade/Grade";
import Units from "./components/Units/Units";
import LessonList from "./components/LessonList/LessonList";


function App() {
  return (
    <Router>
      
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<HomePage/>}/>
      {/* Route */}
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/pet-shop' element={<PetShop/>}/>
      <Route path="/grade" element={<Grade />} />
      <Route path="/units/:grade" element={<Units />} />
      <Route path="/lessons/:grade/:unit" element={<LessonList />} />
    </Routes>

    </Router>
  );
}

export default App;
