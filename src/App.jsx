import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ChatExpress from "./pages/ChatExpress";
import LMSCanvas from "./pages/LMSCanvas";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <nav className="flex flex-row w-full gap-4 bg-[#31343d] p-6 text-white justify-center items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav> */}


      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/chat-express" element={<ChatExpress />}/>
        <Route path="/lms-canvas" element={<LMSCanvas />}/>
      </Routes>
    </>
  )
}

export default App
