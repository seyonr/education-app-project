import React from 'react'
import "./Navbar.css"
import icon from '../../assets/images/icon2.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
      
      <div className='logo'>
        <img src={icon}/>
      </div>



      <div className='nav-list'>
        <ul>
          <li><a>Home</a></li>
          <li><a>Lessons</a></li>
          <li><a>Investments</a></li>
          <li><Link to="/sign-up" className='up'>Sign Up</Link></li>
        </ul>
      </div>
       

    </div>
  )
}

export default Navbar