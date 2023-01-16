import React from 'react'
import './aboutme.css'
import christina from '../assets/christina.jpeg'
function AboutMe() {
  return (
    <>
    <div id = 'aboutme' className = 'bg-[#121212] aboutme'>
    <br></br>
    <br></br>
    <div className = 'mt-10 text_containers ml-32'>
    <div className = 'tracking-wider font-poppins text-3xl text-left font-semibold text-white'> {"<"} About Me {"/>"} </div>
    <p className = 'tracking-wider mt-2 text-white text-left font-poppins'>
    As a Computer Science & Business Administration student, I love exploring the intersection between technology, design, and business. When I'm not juggling school work and extra-currciulars, you can find me competiting in case studies or hackathons (Hack the North '21 and '22!)

Outside of coding, I am also an avid reader and writer, and have had some of my short stories published.
Feel free to reach out to me: <mark className = 'font-semibold font-mono text-[#CAB3DA] bg-transparent'>cyli@uwaterloo.ca</mark> anytime about anything code-related.
    </p>
    
    <h2 className = 'mt-3 font-mono text-left text-white'> Currently, I'm . . . </h2>
    <li className = 'text-left text-white font-poppins'> A 1B CS/BBA student </li>
    <li className = 'text-left text-white font-poppins'> Learning React & Tailwind </li>
    <li className = 'text-left text-white font-poppins'> Working on using Python to build web-scrapers</li>
    <li className = 'text-left text-white font-poppins'> Seeking a Summer 2023 Internship</li>
    </div>
    <img className = 'border-2 border-slate-gray-200 pic' src={christina} alt="Header Img"/>
    
    </div>
    </>
  )
}

export default AboutMe