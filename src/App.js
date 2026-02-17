import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import SignUp from './components/Sign Up/SignUp';


function App() {
  return (
    <Router>
      
    <Navbar/>
    <Routes>
      {/* <Route path='/' exact element={<Home/>}/> */}
      {/* Route */}
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>

    </Router>
  );
}

export default App;
