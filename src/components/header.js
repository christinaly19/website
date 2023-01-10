import { useState, useEffect } from "react";
import headerimage from "../assets/homepage.svg";
import './header.css'
import Typewriter from 'typewriter-effect';
import React from 'react'
import { Github } from "react-bootstrap-icons";
import {EnvelopeAtFill} from "react-bootstrap-icons";
import {TelephoneFill} from "react-bootstrap-icons";

function Header() {
  return (
    <>
    <div className = 'header'>
<div className = 'text_container'>
<h1 className = 'border border-white textbox bg-gradient-to-r from-[#5D2E54] to-[#38246D] ml-32 p-2  text-left font-poppins font-semibold tracking-wider text-white'> Welcome to my Website </h1>
   <h1 className = "mt-4 ml-32 text-left tracking-wide font-semibold text-white font-poppins text-6xl"
 > Hi! I'm Christina Li</h1>
 <br></br>
<div className = 'subtitle  ml-32'>
 <Typewriter
  options={{
    wrapperClassName: "text-white text-4xl font-mono",
    strings: ['CS/BBA Student @ uWaterloo', 'Aspiring Front-End Dev'],
    autoStart: true,
    loop: true,
  }}
/>
</div>

<p className = 'ml-32 tracking-wider text-white mt-12 text-left font-poppins'> 
Hey there! Welcome to my website.  I am an aspiring front-end developer of 3+ years based in Markham, Ontario. 
Currently, I'm pursuing a double degree in CS/BBA at the University of Waterloo. I also have passion for creating engaging & entertaining user experiences with interactive design. 
Hope to see you around! </p>
<button className = 'absolute ml-32 mt-3 mb-3 left-0 text-left font-semibold text-white  hover:bg-[#5B2D55] hover:p-1 hover:rounded-md '> Check Out My Projects <span className = 'arrow mt-3 bg-transparent text-white text-2xl'>  ➳ </span></button>
<span className = 'absolute ml-32 mt-8 icons inline-flex items-baseline'>
  <Github className = 'text-xl mt-3 text-white hover:text-gray-400 '></Github> 
  <EnvelopeAtFill className = 'text-xl ml-3 text-white hover:text-gray-400'></EnvelopeAtFill>
  <TelephoneFill className = 'text-xl ml-3 text-white hover:text-gray-400'></TelephoneFill>
  </span>
    </div>
    <img src={headerimage} alt="Header Img"/>
    </div>
    </>
  )
}

export default Header