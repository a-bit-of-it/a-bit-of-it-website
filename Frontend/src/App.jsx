import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Purpose from "./pages/purpose/Purpose.jsx";
import Contact from "./pages/contact/Contact.jsx";

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
