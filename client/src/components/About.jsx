import React from 'react'
import "./pages.css"
import Img from "../assets/Me2.jpg"

const About = () => {
  return (
    <section className='about-section'>
      <div>
        <img className='img' src={Img} alt="" />
      </div>
      <div>
     <h1 className='about-head'>About Me</h1>
     <div className="about-skills">
      <div className="about-skill">
        <p>HTML & CSS</p>
        <hr style={{width:"50%"}}/>
      </div>
      <div className="about-skill">
        <p>React JS</p>
        <hr style={{width:"70%"}}/>
      </div>
      <div className="about-skill">
        <p>Javascript</p>
        <hr style={{width:"60%"}}/>
      </div>
      <div className="about-skill">
        <p>Next Js</p>
        <hr style={{width:"50%"}}/>
      </div>
      <div className="about-skill">
        <p>Mongo DB</p>
        <hr style={{width:"65%"}}/>
      </div>
      <div className="about-skill">
        <p>Context</p>
        <hr style={{width:"60%"}}/>
      </div>
      <div className="about-skill">
        <p>Frontend librarires: Bootstrap,Ant-design,Material UI,tailwind CSS</p>
        <hr style={{width:"70%"}}/>
      </div>
     </div>
    </div>
    </section>
  )
}

export default About
