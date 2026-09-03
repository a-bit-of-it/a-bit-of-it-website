import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Mission from "./pages/Mission.jsx";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mission" element={<Mission/>} />
      </Routes>
  )
}

export default App
