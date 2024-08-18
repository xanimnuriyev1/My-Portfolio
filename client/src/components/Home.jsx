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
     <p className='Paraghraph'>Frontend developer based in Baku</p>
     <div className="icon-box">
     <div className="btn-group">
      <a href="https://github.com/xanimnuriyev1"><TbBrandGithubFilled /></a>
     </div>
     <div className="btn-group">
      <a href="https://www.linkedin.com/in/khanim-nuriyeva-5031652b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "><FaLinkedinIn /></a>
     </div>
     <div className="btn-group">
      <a href="https://www.facebook.com/people/Xan%C4%B1m-%C4%B0lqarl%C4%B1/pfbid0HNLWSuZRCVyT4LNn4kfHNBwP6FknafemqoXbduKhQHTv8Rn2cX2xHYWyTWGhz5Vkl/?mibextid=LQQJ4d"><FaFacebookF /></a>
     </div>
     </div>
    </div>
    </div>
  )
}

export default Home
