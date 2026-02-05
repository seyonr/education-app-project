import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import icon from '../../assets/images/icon.png'
function Navbar() {
  return (
    <div className='navbar'>
      
      <div className='logo'>
        <img src={icon}/>
      </div>



      <div className='nav-list'>
        <ul>
          <li><a>Home</a></li>
          <li><a>Sign in</a></li>
          <li><a className='sign-up'>Sign Up</a></li>
        </ul>
      </div>
       

    </div>
  )
}

export default Navbar