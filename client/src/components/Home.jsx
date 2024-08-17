import React from 'react'
import Me from "../assets/my.jpg"
import './pages.css'
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
const Home = () => {
  return (
    <div className='MeBox'>
    <div>
    <img src={Me} className='Me' alt="" />
    </div>
    <div>
     <h1>Hi, I am <span>Khanim Nuriyeva</span></h1>
     <div className="icon-box">
     <div className="btn-group">
      <a href=""><TbBrandGithubFilled /></a>
     </div>
     <div className="btn-group">
      <a href=""><FaLinkedinIn /></a>
     </div>
     <div className="btn-group">
      <a href=""><FaFacebookF /></a>
     </div>
     </div>
    </div>
   
    </div>
  )
}

export default Home
