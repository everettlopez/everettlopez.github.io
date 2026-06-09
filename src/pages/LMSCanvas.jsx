import ReactLogo from "../assets/React.svg";
import TailwindLogo from "../assets/Tailwind-CSS.svg";
import JavaScriptLogo from "../assets/JavaScript.svg";
import TypeScriptLogo from "../assets/TypeScript.svg";

import FastAPILogo from "../assets/FastAPI.svg";
import MySQLLogo from "../assets/MySQl.svg";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import JWTSequenceDiagram from "../JWTSequenceDiagram";
import APIExplorer from "../APIExplorer";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="bg-[#31343d] text-white flex flex-col justify-center md:flex-row items-center pt-40 pb-35 pl-10 pr-10 gap-10">
        <div className="flex flex-row gap-6 w-full">
          <div className="flex flex-col w-full gap-6 text-center mb-14">
            <h1 className="text-5xl font-semibold mb-4"
          style={{
            color: "#f9fafb",
            fontFamily: "'Geist', 'Inter', sans-serif",
            letterSpacing: "-0.02em",
          }}>Learning Management System (LMS)</h1>

            <div className="flex flex-row gap-2 justify-center">
              <p className="inline-block text-xs font-mono tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
          style={{ background: "rgb(255, 255, 255)", color: "#000000" }}>.NET Core</p>
              <p className="inline-block text-xs font-mono tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
          style={{ background: "rgb(255, 255, 255)", color: "#000000" }}>C#</p>
          <p className="inline-block text-xs font-mono tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
          style={{ background: "rgb(255, 255, 255)", color: "#000000" }}>MySQL</p>
            </div>

            {/* Tech badges */}
            <div className="flex flex-row gap-4 justify-center">
              <img src={FastAPILogo} alt="FastAPI" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80" />
              <img src={MySQLLogo} alt="MySQL" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80" />
              <img src={ReactLogo} alt="React" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80" />
              <img src={JavaScriptLogo} alt="JavaScript" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80" />
              <img src={TypeScriptLogo} alt="TypeScript" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80" />
            </div>

            <p className="text-2xl">
              A fully functional Learning Management System built with ASP.NET Core MVC, EF Core, and a MySQL relational database, supporting administrators, professors, and students through a complete academic workflow.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
