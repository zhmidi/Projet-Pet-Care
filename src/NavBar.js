import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  
  return (

  <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
  
   <div className='stylenavbar'>
   <img className='petlogo' src="petlog1.png" alt='' />
    
  
      <ul className="navbar-nav">
      
        <li className="nav-item">
          <NavLink  activeclassename="active"  className="nav-link" to="/">Home
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink  activeclassename="active"  className="nav-link" to="/About">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  activeclassename="active"  className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink  activeclassename="active"  className="nav-link" to="/FAQ">FAQ</NavLink>
        </li>
        
      </ul>

    </div>
 

  
</nav>

  )
}

export default NavBar