import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-row justify-between items-center p-6 bg-[#31343d] text-white">

        <span>Everett</span>

        <nav className="flex flex-row justify-center gap-5 p-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <span>Sample Element</span>
      </div>


      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App
