import React from 'react';
import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Home() {

  const [activeTab, setActiveTab] = useState("backend");

  const backendSkills = [
    { icon: "src/assets/Python.svg", title: "Python"},
    { icon: "src/assets/FastAPI.svg", title: "FastAPI"},
    { icon: "src/assets/MySQL.svg", title: "MySQL"},
    { icon: "src/assets/AWS.svg", title: "AWS"},
  ];

  const dataSkills = [
    { icon: "src/assets/Pandas.svg", title: "Pandas"},
    { icon: "src/assets/NumPy.svg", title: "NumPy"}
  ];

  const frontendSkills = [
    { icon: "src/assets/React.svg", title: "React"},
    { icon: "src/assets/Tailwind-CSS.svg", title: "Tailwind"},
    { icon: "src/assets/JavaScript.svg", title: "JavaScript"},
    { icon: "src/assets/D3.js.svg", title: "D3.js"},
  ]



  return (
    <>
    {/* Welcome Section */}
    <div className="p-6 bg-[#31343d] text-white flex flex-row justify-center items-center pt-[70px] pb-[70px] gap-10">
      
      {/* Welcome Section - Text */}
      <div className="flex flex-col gap-3 w-[500px]">
        <h1 className="text-[62px]">Everett Lopez</h1>
        <span className="text-[20px]">Backend Engineer • Python | FastAPI | SQL | AWS</span>

        {/* Click Logos and Resume */}
        <div className="flex flex-row gap-5 items-center pt-3">
          <img src="src/assets/GitHubLogo.png" alt="GitHub Logo" className="w-12 h-12 rounded-full object-cover cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80"/>
          <img src="src/assets/LinkedInLogo.png" alt="LinkedIn Logo" className="w-12 h-12 rounded-full object-cover cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80"/>
          <img src="src/assets/LeetCodeLogo.png" alt="LeetCode Logo" className="w-12 h-12 rounded-full object-cover cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80"/>
          <span>or</span>
          <button className="bg-gray-500 h-12 p-2 rounded pl-4 pr-4">Download Resume</button>
        </div>

      </div>

      <div className="flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/ff3c0e89-af15-4b69-a0bb-a4c9f4278687/fg2wRiqJN7.lottie"
          loop
          autoplay
          className="w-[500px] h-[500px]"
        />
      </div>

    </div>

    {/* About Section */}
    <div className="pl-[80px] pb-[200px] bg-[#31343d] text-white pt-[150px] pb-[150px] gap-10">
      {/* About Section - Text */}
      <div className="flex flex-col gap-3 w-[600px]">
        <div class="flex-grow h-1 w-20 bg-white"></div>
        <span className="text-[36px]">About Me</span>
        <span className="text-[20px]">Backend engineering-focused Computer Science student with hands-on experience in <span className="font-bold">FastAPI</span>, <span className="font-bold">Python</span>, <span className="font-bold">React</span>, and <span className="font-bold">TypeScript</span>. Skilled in building secure authentication systems, clean REST APIs, and reliable full-stack application flows. Known for debugging complex issues, maintaining clean project structure, and delivering modern, minimal UI implementations with Tailwind CSS.</span>
        <span className="text-[20px] pt-[10px]">Learn More</span>
      </div>
    </div>

    {/* Skills Section */}
    <div className="flex pl-[80px] pb-[200px] bg-[#31343d] text-white pt-[150px] pb-[150px] gap-10 justify-center">

      <div className="flex flex-col gap-3 w-[600px] justify-center items-center">
        <div className="flex-grow h-1 w-20 bg-white"></div>
        <span className="text-[36px] pb-[10px]">Skills</span>

        {/* Tab Buttons for Skills */}
        <div className="flex flex-row gap-3">
          <button onClick={() => setActiveTab("backend")} className={`px-4 py-2 rounded ${activeTab === "backend" ? "bg-white text-black" : "bg-gray-600"}`}>Backend</button>
          <button onClick={() => setActiveTab("data")} className={`px-4 py-2 rounded ${activeTab === "data" ? "bg-white text-black" : "bg-gray-600"}`}>Data Engineering</button>
          <button onClick={() => setActiveTab("frontend")} className={`px-4 py-2 rounded ${activeTab === "frontend" ? "bg-white text-black" : "bg-gray-600"}`}>Frontend</button>
        </div>
        
        <div className="flex flex-row gap-4">

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