import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";
import "./pages.css"

const Contact = () => {
  return (
    <section className='contact-sec'>
      <div>
       <h1 className='lets'>Lets's talk</h1>
       <p className='Contact-paraghraph'>I'm currently available to take on new projects, so feel free to send me a <br /> message about anything that you want me to work on.</p>
       <div className="contact-me">
        <p className='contact-icon'><MdEmail /></p>
        <p className='contact-text'>xanimnuriyeva07@gmail.com</p>
       </div>
       <div className="contact-me">
        <p className='contact-icon'><FaPhoneFlip /></p>
        <p className='contact-text'>0555724990</p>
       </div>
       <div className="contact-me">
        <p  className='contact-icon'><FaMapPin /></p>
        <p className='contact-text'>Baku 20 Yanvar</p>
       </div>
      </div>
      <div>
    <div>
      <p className='Your'>Your Name</p>
      <input className='ContactInp' type="text" placeholder='Enter your name' />
    </div>
    <div>
      <p className='Your'>Your Email</p>
      <input className='ContactInp' type="email" placeholder='Enter your email' />
    </div>
    <div>
      <p className='Your'>Write your message here</p>
      <textarea className='textare' name="Enter your message" id=""></textarea>
    </div>
    <button className='contactBtn'>Send</button>
    </div>
    </section>
  )
}

export default Contact
