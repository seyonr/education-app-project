import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import icon from '../../assets/images/icon2.png'
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
          <li><a>Sign Up</a></li>
        </ul>
      </div>
       

    </div>
  )
}

export default Navbar