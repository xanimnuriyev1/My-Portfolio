import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import StarLogo from "../assets/star.png"

const Header = () => {
  return (
   <header className='navbar'>
   <div>
    <img src={StarLogo} className='StarLogo' alt="" />
   </div>
   <div>
    <nav>
        <ul className='pages'>
            <li><NavLink to={'/'} className={(navData)=>navData.isActive ? "active" :""}>Home</NavLink></li>
            <li><NavLink to={'/about'} className={(navData)=>navData.isActive ? "active" :""}>About Me</NavLink></li>
            <li><NavLink to={'/services'} className={(navData)=>navData.isActive ? "active" :""}>Services</NavLink></li>
            <li><NavLink to={'/portfolio'} className={(navData)=>navData.isActive ? "active" :""}>Portfolio</NavLink></li>
            <li><NavLink to={'/contact'} className={(navData)=>navData.isActive ? "active" :""}>Contact</NavLink></li>
        </ul>
    </nav>
   </div>
   <div>
    <button className='contactBtn'>contact with me</button>
   </div>
   </header>
  )
}

export default Header
