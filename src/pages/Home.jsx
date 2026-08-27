import { TypeAnimation } from 'react-type-animation';

import React from 'react';
import { useState } from "react";
import sampleHeadshot from "../assets/sample_headshot.jpg";
import PythonLogo from "../assets/Python.svg";
import PandasLogo from "../assets/Pandas.svg";
import ReactLogo from "../assets/react.svg";
import FastAPILogo from "../assets/FastAPI.svg";
import NumPyLogo from "../assets/NumPy.svg";
import TailwindLogo from "../assets/Tailwind-CSS.svg";
import MySQLLogo from "../assets/MySQL.svg";
import MatplotlibLogo from "../assets/Matplotlib.svg";
import JavaScriptLogo from "../assets/JavaScript.svg";
import resumeFile from "../assets/Everett_Resume.pdf";


export default function Home() {

  const [activeTab, setActiveTab] = useState("backend");

  const backendSkills = [
    { icon: PythonLogo, title: "Python"},
    { icon: FastAPILogo, title: "FastAPI"},
    { icon: MySQLLogo, title: "MySQL"},
    // { icon: AWSLogo, title: "AWS"},
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
    // { icon: TypeScriptLogo, title: "TypeScript"},
    // { icon: D3Logo, title: "D3.js"},
  ]

  return (
    <>
    <div className="flex flex-col px-6 md:px-12 pt-10 pb-20 gap-20">

      {/* HEADER */}
      <div className="flex items-end md:flex-row justify-center 
                gap-5 text-gray-400 w-full px-4 md:justify-end md:gap-10">
        <div className="relative group">
          <a className="tracking-wide text-base md:text-lg cursor-pointer">
            CONTACT
          </a>

          <div
            className="
              absolute left-0 mt-2 w-auto
              bg-white shadow-lg rounded-md
              opacity-0 group-hover:opacity-100
              pointer-events-none group-hover:pointer-events-auto
              transition
            "
          >
            <div className="flex flex-col p-3 text-sm tracking-wide">
              <a href="mailto:youremail@example.com" className="py-2 hover:text-gray-600 text-lg">
                everettlopezsr@gmail.com
              </a>
              <a href="tel:8183702618" className="py-2 hover:text-gray-600 text-lg">
                <p>+1 (818) 370-2618</p>
              </a>
            </div>
          </div>
        </div>


        <div className="relative group">
          <a className="tracking-wide text-base md:text-lg cursor-pointer">
            SOCIALS
          </a>

          <div
            className="
              absolute left-0 mt-2 w-auto
              bg-white shadow-lg rounded-md
              opacity-0 group-hover:opacity-100
              pointer-events-none group-hover:pointer-events-auto
              transition
            "
          >
            <div className="flex flex-col p-3 text-sm tracking-wide">
              <a href="" className="py-2 hover:text-gray-600 text-lg">
                GitHub
              </a>
              <a href="" className="py-2 hover:text-gray-600 text-lg">
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
        <a href={resumeFile} download="Everett_Resume.pdf" className="tracking-wide text-base md:text-lg hover:text-gray-500">RESUME</a>
      </div>

      {/* INTRODUCTION */}
      <div className="flex min-h-[200px] md:min-h-[380px] items-end">
        <TypeAnimation
          sequence={[
            "HELLO WORLD, I'M EVERETT",
          ]}
          speed={30}
          repeat={0}
          cursor={true}
          className="text-4xl sm:text-5xl md:text-7xl font-light tracking-wide"
        />
      </div>

      {/* HEADSHOT AND BRIEF SUMMARY */}
      <div className="flex flex-col md:flex-row items-center justify-center 
                gap-10 md:gap-20 py-10 md:py-10 w-full">
        <img src={sampleHeadshot} className="h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px] 
               object-cover rounded-2xl"/>

        <div className="flex flex-col gap-6 text-center md:text-left max-w-[90%] md:max-w-[600px]">
          <p className="tracking-wider text-lg sm:text-xl">ASPIRING BACKEND ENGINEER WHO ENJOYS BUILDING SYSTEMS THAT FEEL SIMPLE, PREDICTABLE, AND DURABLE. I WORK WITH PYTHON, FASTAPI, AND SQL, WITH A GROWING INTEREST IN DISTRIBUTED SYSTEMS AND DATA-DRIVEN TOOLING.</p>
          <div className="flex justify-center md:justify-start">
            <a href={resumeFile} download="Everett_Resume.pdf" className="w-fit"><p className="text-gray-400 border-b-2 text-lg hover:text-gray-500 hover:border-gray-500">DOWNLOAD RESUME</p></a>
          </div>
        </div>
      </div>

      {/* RESUME / PORTFOLIO ACCORDION */}
      <div className="flex flex-col w-full max-w-[800px] mx-auto mt-10 px-4">
        <AccordionItem title="EDUCATION">

          <div className="flex flex-col border border-gray-400 rounded-[10px] p-3">
            <p className="text-gray-400 text-sm">UNIVERSITY</p>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <p className="text-lg text-gray-600">The University of Utah</p>
              <p className="text-gray-600">August 2021 - May 2027</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <p>B.S. in Software Development</p>
              <p>GPA: 2.9</p>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="EXPERIENCE">
          <ExperienceItem 
            employer="Kahlert School of Computing"
            position="Undergraduate Research Assistant"
            startDate="August 2025"
            location="Salt Lake City, UT"
            endDate="Current">
              <li>Engineered Python-based cryptographic workflows to support provacy-preserving media provenance research, implementing hashing algorithms and polynomial commitment schemes.</li>
              <li>Analyzed C2PA specifications and integrated cryptographic components into production-ready backend logic.</li>
            </ExperienceItem>
        </AccordionItem>

        <AccordionItem title="PROJECTS">
          <div className="flex flex-col gap-3">
            <ProjectItem
              title="Chat Express"
              link1_title="GitHub"
              link1="https://github.com/everettlopez/ChatExpress"
              link2_title="YouTube"
              link2="https://youtu.be/zKPDco1Z9J4?si=N9UJ8POkmOZLQuY8"
              techStack="FastAPI - SQLModel - RestAPI Design - React - TypeScript"
              semester="Spring 2026">
                {/* Here */}
                <div className="flex justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/zKPDco1Z9J4?si=6JhZUfzbkMzsqijs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-[10px]"></iframe>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-lg tracking-wide text-gray-500">BACKEND ARCHITECTURE (FastAPI)</h2>
                  <ul className="list-disc pl-5">
                    <li>Modular Routers - Accounts, Chats, and Messages seperated for clean API boundaries and maintainability.</li>
                    <li>Typed Request/Response Model - SQLModel + Pydantic validation ensures predictable data flow across the stack.</li>
                    <li>Async Endpoints - Non-blocking I/O for message fetching and chat updates.</li>
                    <li>Swagger-Driven Development - Auto-generated docs used for iterative endpoint testing.</li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-lg tracking-wide text-gray-500">DATABASE LAYER (SQL Model + Relational Schema)</h2>
                  <ul className="list-disc pl-5">
                    <li>Normalized Relational Models — Users, Chats, Messages with explicit foreign keys.</li>
                    <li>Automatic Table Generation — SQLModel handles schema creation without manual migrations for MVP.</li>
                    <li>Efficient Query Patterns — Filtered message retrieval per chat; indexed lookups.</li>
                    <li>Strong Typing Across DB + API — Same model definitions power both database and API validation.</li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-lg tracking-wide text-gray-500">FRONTEND ARCHITECTURE (React + TypeScript)</h2>
                  <ul className="list-disc pl-5">
                    <li>Modular Routers - Accounts, Chats, and Messages seperated for clean API boundaries and maintainability.</li>
                    <li>Typed Request/Response Model - SQLModel + Pydantic validation ensures predictable data flow across the stack.</li>
                    <li>Async Endpoints - Non-blocking I/O for message fetching and chat updates.</li>
                    <li>Swagger-Driven Development - Auto-generated docs used for iterative endpoint testing.</li>
                  </ul>
                </div>
            </ProjectItem>

            <ProjectItem
              title="Spotify Genre Intelligence Dashboard"
              link1_title="Website"
              link1="https://dataviscourse2025.github.io/final-project-treblemakers/"
              link2_title="YouTube"
              link2="https://youtu.be/93Bo9WEG_w0?si=eocwShK1nYsc_DL2"
              techStack="JavaScript - D3.js - Spotify Web API - Data Injestion"
              semester="Fall 2025"></ProjectItem>

            <ProjectItem
              title="Fraudulent Behaviour in Mobile Transaction"
              link1_title="Kaggle"
              link1="https://www.kaggle.com/writeups/everettlopez/credit-fraud-eda"
              techStack="Python - Pandas - NumPy - Matplotlib - Seaborn - StatsModel"
              semester="Fall 2025">
            </ProjectItem>
          
          </div>
        </AccordionItem>
      </div>


    </div>
    </>
  );
}

function ExperienceItem({employer, position, location, startDate, endDate, children}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col border border-gray-400 rounded-[10px] p-3">
      <button
        onClick={() => setOpen(!open)} 
        className="flex justify-between items-center">
        <span className="text-lg tracking-wider text-gray-600">{employer} | <span className="text-lg text-gray-400">{location}</span></span>

        {/* Plus / Minus Icon */}
        <span
          className={`
            text-gray-300 text-2xl transition-transform duration-300
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      <div className="flex justify-between items-center">
        <p className="tracking-wider text-gray-400">{position}</p>
        <p className="tracking-wider text-gray-400">{startDate} - {endDate}</p>
      </div>

      {/* Content */}
      <div className={`
          overflow-hidden transition-all duration-300
          ${open ? "max-h-[500px] mt-3" : "max-h-0"}
        `}>
          <div className="text-gray-400 tracking-wide leading-relaxed py-2">
            <ul className="list-disc pl-5 space-y-1">
              {children}
            </ul>
          </div>
      </div>
      
    </div>
  );
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-xl tracking-wide text-black">
          {title}
        </span>

        {/* Plus / Minus Icon */}
        <span
          className={`
            text-gray-300 text-2xl transition-transform duration-300
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      {/* Content */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${open ? "mt-3" : "max-h-0"}
        `}
      >
        <div className="text-gray-400 tracking-wide leading-relaxed py-5">
          {children}
        </div>
      </div>
    </div>
  );
}

function ProjectItem({title, link1_title, link2_title, link1, link2, techStack, semester, children}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col border border-gray-400 rounded-[10px] p-3">
      <button
        onClick={() => setOpen(!open)} 
        className="flex justify-between items-center">
        <span className="text-lg tracking-wider text-gray-600">{title} | <a href={link1} target="_blank" rel="noopener noreferrer"><span className="text-lg text-gray-400 hover:text-gray-500">{link1_title}</span></a> <a href={link2} target="_blank" rel="noopener noreferrer"><span className="text-lg text-gray-400 hover:text-gray-500">{link2_title}</span></a></span>

        {/* Plus / Minus Icon */}
        <span
          className={`
            text-gray-300 text-2xl transition-transform duration-300
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      <div className="flex justify-between items-center">
        <p className="tracking-wider text-gray-400">{techStack}</p>
        <p className="tracking-wider text-gray-400">{semester}</p>
      </div>

      {/* Content */}
      <div className={`
          overflow-hidden transition-all duration-300
          ${open ? "max-h-fit mt-3" : "max-h-0"}
        `}>
          <div className="text-gray-400 tracking-wide leading-relaxed py-2 flex flex-col gap-5">
            {children}
          </div>
      </div>
      
    </div>
  );
}

function SkillCard({ icon, title }) {
  return (
    <div className="
      flex flex-col items-center justify-evenly
      p-4 rounded-xl bg-gray-500 
      hover:bg-gray-700 hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer

      w-[150px] h-[220px]          /* default: small for mobile */
      sm:w-[180px] sm:h-[260px]    /* small tablets */
      md:w-[200px] md:h-[300px]    /* full size on desktop */
    ">
      <img src={icon} className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] mb-2"/>
      <p className="text-white font-semibold text-[20px] sm:text-[26px] md:text-[32px] text-center">{title}</p>
    </div>
  )
}
