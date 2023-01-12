import React from 'react'
import "./projects.css"

function Projects() {
  return (
    <div>
      <div className = 'h-1/2 bg-[#151419] projects'>
      <div className = 'text ml-32 mr-32'>
      <div className = 'tracking-wider font-poppins text-3xl text-left font-semibold text-white'> {"<"} My Projects {"/>"} </div>
      <p className = 'text-white font-poppins text-lg text-left mt-3'> Below are some projects I've worked on.
      Hover over any box to learn more!</p>
      <div className = "boxwrapper">
   
                <div className = "box1">
                    <div className = 'boximg1'>
                    <div className = "overlay1">
                        <handwritten className = "tracking-wider subtitle_proj font-semibold text-xl"> Meraki </handwritten>
                        <p1 className = 'projectdes'> a web-app created with ReactJS, Tailwind, and Unsplash API. Designed to generate creative writing/journaling prompts and create a 
                        'moodboard' (collection of images) that reflect users' text using Unsplash's Keyword to Image API. </p1>
                        <a href="https://github.com/christinaly19/meraki"><button type="button" className ="projectbutton border-2 rounded-lg hover:border-[#1D192E]" >View On Github</button> </a>
                </div>
                </div>
                </div>


        
                <div className = "box2">
                <div className = "overlay2">
                    <handwritten className = "tracking-wider subtitle_proj font-semibold text-xl">Sketchy Studios</handwritten>
                    <p1 className = 'projectdes'> a live, interactive web game with a custom canvas component, unique avatars, and real-time gameplay. built using react bootstrap (frontend) and socket.io, node.js and express (for backend). submitted to hack the north '21!</p1>
                    <div className = "wrap">
                    <a href="https://github.com/christinaly19/sketchy-studio"><button type="button" class="projectbutton border-2 rounded-lg hover:border-[#1D192E] hover:bg-[#1D192E]">View On Github</button></a>
                    <a href = 'https://devpost.com/software/sketchy-studios'><button type="button" class="ml-2 projectbutton border-2 rounded-lg hover:border-[#1D192E]">View On Devpost</button></a>
                    </div>
                </div>
                </div>
           

         
                <div className = "box3">
                <div className = "overlay3">
                    <handwritten className = "tracking-wider subtitle_proj font-semibold text-xl"> Tutor.ly</handwritten>
                    <p1 className = "projectdes"> a web-app built with React,html2canvas, and Material-UI. Helps tutors track student performance 
                    and input information easily & download into PDF. Also incorporates live Chat Bot to answer FAQs! </p1> 
                    <a href ='https://github.com/christinaly19/tutorly'><button type="button" class="projectbutton border-2 rounded-lg hover:border-[#1D192E] hover-bg[#1D192E]">View On Github</button></a>
                </div>
                </div>      
         

          
                <div className = "box4">
                <div className = "overlay4">
                <handwritten className = "tracking-wider subtitle_proj font-semibold text-xl"> Job-Search</handwritten>
                    <p1 className = "projectdes"> a small, first project using web-scraping that searches for recent postings of writing job postings on timejobs. uses beautiful soup and python. </p1> 
                    <a href ='https://github.com/christinaly19/job-search'><button type="button" class="projectbutton border-2 rounded-lg hover:border-[#1D192E] hover-bg[#1D192E]">View On Github</button></a>
                </div>
                </div>
           
            </div>
      </div>
      </div>
    </div>
  )
}

export default Projects