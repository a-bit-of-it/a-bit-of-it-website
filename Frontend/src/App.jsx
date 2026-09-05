import './App.css'
import { Routes, Route } from "react-router-dom";
import Purpose from "./pages/Purpose.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
    return (
        <Routes>
            <Route path="/*" element={<Home/>} />
            <Route path="/purpose" element={<Purpose/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    )
}

export default App
