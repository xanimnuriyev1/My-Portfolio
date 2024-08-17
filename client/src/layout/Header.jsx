import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import StarLogo from "../assets/star.png"
import { FiAlignRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {
const navRef=useRef()
const showNav=()=>{
    navRef.current.classList.toggle("responsive_nav")
}

  return (
   <header className='navbar'>
   <div>
    <img src={StarLogo} className='StarLogo' alt="" />
   </div>
   <div>
    <nav ref={navRef}>
        <ul className='pages'>
            <li><NavLink to={'/'} className={(navData)=>navData.isActive ? "active" :""}>Home</NavLink></li>
            <li><NavLink to={'/about'} className={(navData)=>navData.isActive ? "active" :""}>About Me</NavLink></li>
            <li><NavLink to={'/services'} className={(navData)=>navData.isActive ? "active" :""}>Services</NavLink></li>
            <li><NavLink to={'/portfolio'} className={(navData)=>navData.isActive ? "active" :""}>Portfolio</NavLink></li>
            <li><NavLink to={'/contact'} className={(navData)=>navData.isActive ? "active" :""}>Contact</NavLink></li>
            <li>
                <button className='nav-btn' onClick={showNav}>
                <IoClose />
                </button>
            </li>
        </ul>
    </nav>
   </div>
   <div className='nav-btn-box'>
    <button className='nav-btn nav-close-btn' onClick={showNav}>
    <FiAlignRight />
    </button>
   </div>
   </header>
  )
}

export default Header
