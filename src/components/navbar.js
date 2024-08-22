import React from 'react'
import './navbar.css'
import { useState, useEffect } from "react";


export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
        <nav className="ml-2 relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                CHRISTINA.LY
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#aboutme"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About Me</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#projects"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Projects</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="https://drive.google.com/file/d/1_QNCGRL-jtH7nhrcrtoH-fgGqRYQkIex/view?usp=sharing"
                  >
                    <i className = 'className="fab fa-pinterest text-lg leading-lg text-white opacity-75'></i><span className="ml-2">RESUME</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
