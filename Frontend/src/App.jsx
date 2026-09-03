import './App.css'
import { Routes, Route } from "react-router-dom";
import { InquiryProvider } from "./InquiryContext.jsx";
import Home from "./pages/Home.jsx";
import Purpose from "./pages/Purpose.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
      <InquiryProvider>
          <Routes>
              <Route path="/*" element={<Home/>} />
              <Route path="/purpose" element={<Purpose/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
      </InquiryProvider>
  )
}

export default App
