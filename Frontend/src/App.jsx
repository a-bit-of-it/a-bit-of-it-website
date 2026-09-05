import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Purpose from "./pages/Purpose.jsx";
import Contact from "./pages/Contact.jsx";

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
