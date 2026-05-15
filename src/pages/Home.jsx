import React from 'react';
import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import ReactLogo from "../assets/React.svg";
import TailwindLogo from "../assets/Tailwind-CSS.svg";
import JavaScriptLogo from "../assets/JavaScript.svg";
import TypeScriptLogo from "../assets/TypeScript.svg";
import D3Logo from "../assets/D3.js.svg";

import PythonLogo from "../assets/Python.svg";
import FastAPILogo from "../assets/FastAPI.svg";
import MySQLLogo from "../assets/MySQl.svg";
import AWSLogo from "../assets/AWS.svg";

import PandasLogo from "../assets/Pandas.svg";
import NumPyLogo from "../assets/NumPy.svg";
import MatplotlibLogo from "../assets/Matplotlib.svg";

import GitHubLogo from "../assets/GitHubLogo.png";
import LinkedInLogo from "../assets/LinkedInLogo.png";
import LeetCodeLogo from "../assets/LeetcodeLogo.png";

import VisualProjectBackground from "../assets/VisualProject.png";


export default function Home() {

  const [activeTab, setActiveTab] = useState("backend");

  const backendSkills = [
    { icon: PythonLogo, title: "Python"},
    { icon: FastAPILogo, title: "FastAPI"},
    { icon: MySQLLogo, title: "MySQL"},
    { icon: AWSLogo, title: "AWS"},
  ];

  const dataSkills = [
    { icon: PandasLogo, title: "Pandas"},
    { icon: NumPyLogo, title: "NumPy"},
    { icon: MatplotlibLogo, title: "Matplotlib"},
  ];

  const frontendSkills = [
    { icon: ReactLogo, title: "React"},
    { icon: TailwindLogo, title: "Tailwind"},
    { icon: JavaScriptLogo, title: "JavaScript"},
    { icon: TypeScriptLogo, title: "TypeScript"},
    { icon: D3Logo, title: "D3.js"},
  ]



  return (
    <>
    {/* Welcome Section */}
    <div className="p-6 bg-[#31343d] text-white flex flex-col md:flex-row justify-center items-center pt-[70px] pb-[70px] gap-10">
      
      {/* Welcome Section - Text */}
      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-5xl">Everett Lopez</h1>
        <span className="text-3xl">Backend Engineer • Python | FastAPI | SQL | AWS</span>

        {/* Click Logos and Resume */}
        <div className="flex flex-row gap-5 items-center pt-3">
          <a href="https://github.com/everettlopez" target="_blank" rel="noopener noreferrer"><img src={GitHubLogo} alt="GitHub Logo" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                 rounded-full object-cover cursor-pointer 
                 transition duration-200 hover:scale-110 hover:opacity-80" href=""/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/everettlopezjr"><img src={LinkedInLogo} alt="LinkedIn Logo" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                 rounded-full object-cover cursor-pointer 
                 transition duration-200 hover:scale-110 hover:opacity-80"/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/u/everettlopezjr/"><img src={LeetCodeLogo} alt="LeetCode Logo" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                 rounded-full object-cover cursor-pointer 
                 transition duration-200 hover:scale-110 hover:opacity-80"/></a>
          <span>or</span>
          <a href="/Resume.pdf" download target="_blank" rel="noopener noreferrer"><button className="bg-gray-500 
                 h-10 sm:h-11 md:h-12 
                 px-3 sm:px-4 md:px-5 
                 rounded-full 
                 text-sm sm:text-base 
                 hover:bg-gray-700 transition duration-300 
                 hover:scale-105 hover:shadow-xl cursor-pointer">Download Resume</button></a>
        </div>

      </div>

      <div className="flex justify-center items-center w-full">
        <DotLottieReact
          src="https://lottie.host/ff3c0e89-af15-4b69-a0bb-a4c9f4278687/fg2wRiqJN7.lottie"
          loop
          autoplay
          className="w-65 h-65 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
        />
      </div>

    </div>

    {/* About Section */}
    <div className="bg-[#31343d] text-white 
                px-6 sm:px-10 md:px-20 
                py-16 sm:py-24 md:py-32">
      {/* About Section - Text */}
      <div className="flex flex-col gap-4 w-full md:w-2/3 lg:w-1/2">
        <div class="h-1 w-16 bg-white"></div>
        <span className="text-3xl sm:text-4xl md:text-5xl font-semibold">About Me</span>

        <span className="text-base sm:text-lg md:text-xl leading-relaxed">Backend engineering-focused Computer Science student with hands-on experience in <span className="font-bold">FastAPI</span>, <span className="font-bold">Python</span>, <span className="font-bold">React</span>, and <span className="font-bold">TypeScript</span>. Skilled in building secure authentication systems, clean REST APIs, and reliable full-stack application flows. Known for debugging complex issues, maintaining clean project structure, and delivering modern, minimal UI implementations with Tailwind CSS.</span>
        <span className="text-base sm:text-lg md:text-xl pt-2 cursor-pointer hover:opacity-80 transition">Learn More</span>
      </div>
    </div>

    {/* Skills Section */}
    <div className="w-full bg-[#31343d] text-white py-[150px] flex flex-col items-center">

      <div className="flex flex-col gap-3 w-[800pxpxpx] justify-center items-center">
        <div className="flex-grow h-1 w-20 bg-white"></div>
        <span className="text-[36px] pb-[10px]">Skills</span>

        {/* Tab Buttons for Skills */}
        <div className="flex gap-4 mb-10">
          <button onClick={() => setActiveTab("backend")} className={`px-4 py-2 rounded-full ${activeTab === "backend" ? "bg-white text-black" : "bg-gray-600"}`}>Backend</button>
          <button onClick={() => setActiveTab("data")} className={`px-4 py-2 rounded-full ${activeTab === "data" ? "bg-white text-black" : "bg-gray-600"}`}>Data Engineering</button>
          <button onClick={() => setActiveTab("frontend")} className={`px-4 py-2 rounded-full ${activeTab === "frontend" ? "bg-white text-black" : "bg-gray-600"}`}>Frontend</button>
        </div>
        
        <div className="flex flex-wrap gap-6 justify-center w-full">

          {activeTab === "backend" && backendSkills.map((skill) => (
            <SkillCard key={skill.title} icon={skill.icon} title={skill.title}/>
          ))}

          {activeTab === "data" && dataSkills.map((skill) => (
            <SkillCard key={skill.title} icon={skill.icon} title={skill.title}/>
          ))}

          {activeTab === "frontend" && frontendSkills.map((skill) => (
            <SkillCard key={skill.title} icon={skill.icon} title={skill.title}/>
          ))}

        </div>
      </div>
    </div>

    {/* Portfolio */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mx-auto 
                p-3 bg-[#31343d] 
                pt-16 sm:pt-24 md:pt-32 
                pb-16 sm:pb-24 md:pb-32">


      {/* Card */}
      <div className="bg-gray-700 rounded-lg flex flex-col 
                  items-center justify-start 
                  bg-cover bg-center 
                  hover:bg-gray-700 transition duration-300 
                  text-white gap-4 
                  pt-10 sm:pt-14 md:pt-16 
                  h-[400px] sm:h-[500px] md:h-[600px] cursor-pointer">
        <span className="text-2xl sm:text-3xl md:text-[32px] font-bold">Full-Stack Messaging Application</span>
        <span className="text-base sm:text-lg md:text-[20px]">Recreated system such as </span>

        <div className="flex flex-row gap-4 pt-2">
          <span className="bg-white 
                       px-4 sm:px-5 md:px-6 
                       py-2 sm:py-3 
                       rounded-full flex items-center 
                       text-black hover:bg-gray-300">Learn More</span>
          <a href="https://chatexpress.tech" target="_blank" rel="noopener noreferrer"><span className="bg-gray-700 
                         px-4 sm:px-5 md:px-6 
                         py-2 sm:py-3 
                         rounded-full flex items-center 
                         border-2 border-solid 
                         hover:bg-white hover:text-black">Website</span></a>
        </div>
      </div>

      {/* Card */}
      <div className="bg-gray-700 rounded-lg flex flex-col 
                  items-center justify-start 
                  bg-cover bg-center 
                  hover:bg-gray-700 transition duration-300 
                  text-white gap-4 
                  pt-10 sm:pt-14 md:pt-16 
                  h-[400px] sm:h-[500px] md:h-[600px] cursor-pointer">
        <span className="text-2xl sm:text-3xl md:text-[32px] font-bold">Learning Management System (LMS)</span>
        <span className="text-base sm:text-lg md:text-[20px]">Recreated system such as </span>

        <div className="flex flex-row gap-4 pt-2">
          <span className="bg-white 
                       px-4 sm:px-5 md:px-6 
                       py-2 sm:py-3 
                       rounded-full flex items-center 
                       text-black hover:bg-gray-300">Learn More</span>
          <a href="https://db-111.coe.utah.edu/" target="_blank" rel="noopener noreferrer"><span className="bg-gray-700 
                         px-4 sm:px-5 md:px-6 
                         py-2 sm:py-3 
                         rounded-full flex items-center 
                         border-2 border-solid 
                         hover:bg-white hover:text-black">Website</span></a>
        </div>
      </div>



      {/* Card */}
      <div className="bg-gray-700 rounded-lg flex flex-col 
                  items-center justify-start 
                  bg-cover bg-center 
                  hover:bg-gray-700 transition duration-300 
                  text-white gap-4 
                  pt-10 sm:pt-14 md:pt-16 
                  h-[400px] sm:h-[500px] md:h-[600px] cursor-pointer">
        <span className="text-2xl sm:text-3xl md:text-[32px] font-bold">Learning Management System (LMS)</span>
        <span className="text-base sm:text-lg md:text-[20px]">Recreated system such as </span>

        <div className="flex flex-row gap-4 pt-2">
          <span className="bg-white 
                       px-4 sm:px-5 md:px-6 
                       py-2 sm:py-3 
                       rounded-full flex items-center 
                       text-black hover:bg-gray-300">Learn More</span>
          <a href="https://db-111.coe.utah.edu/" target="_blank" rel="noopener noreferrer"><span className="bg-gray-700 
                         px-4 sm:px-5 md:px-6 
                         py-2 sm:py-3 
                         rounded-full flex items-center 
                         border-2 border-solid 
                         hover:bg-white hover:text-black">Website</span></a>
        </div>
      </div>

      {/* Card */}
      <div className="bg-gray-700 rounded-lg flex flex-col 
                  items-center justify-start 
                  bg-cover bg-center 
                  hover:bg-gray-700 transition duration-300 
                  text-white gap-4 
                  pt-10 sm:pt-14 md:pt-16 
                  h-[400px] sm:h-[500px] md:h-[600px] cursor-pointer">
        <span className="text-2xl sm:text-3xl md:text-[32px] font-bold">Learning Management System (LMS)</span>
        <span className="text-base sm:text-lg md:text-[20px]">Recreated system such as </span>

        <div className="flex flex-row gap-4 pt-2">
          <span className="bg-white 
                       px-4 sm:px-5 md:px-6 
                       py-2 sm:py-3 
                       rounded-full flex items-center 
                       text-black hover:bg-gray-300">Learn More</span>
          <a href="https://db-111.coe.utah.edu/" target="_blank" rel="noopener noreferrer"><span className="bg-gray-700 
                         px-4 sm:px-5 md:px-6 
                         py-2 sm:py-3 
                         rounded-full flex items-center 
                         border-2 border-solid 
                         hover:bg-white hover:text-black">Website</span></a>
        </div>
      </div>

    </div>

    </>
  );
}

function SkillCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-gray-500 w-[200px] h-[300px] items-center justify-evenly
                    hover:bg-gray-700 transition duration-300 
                    hover:scale-105 hover:shadow-xl cursor-pointer">
      <img src={icon} className="w-[150px] h-[150px] mb-2"/>
      <p className="text-white font-semibold text-[32px]">{title}</p>
    </div>
  )
}