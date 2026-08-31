import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import Cases from "./Cases.jsx";
import ContactUs from "./ContactUs.jsx";
import WhyWeExist from "./WhyWeExist.jsx";
import MissionPage from "./MissionPage.jsx";
import GithubLink from "./GithubLink.jsx";

function HomePage() {
  const [inquiryPrefill, setInquiryPrefill] = useState(null);

  function handleSelectService(text) {
    setInquiryPrefill({ text, ts: Date.now() });
  }

  return (
      <>
          <Hero/>

          <div className="app">
              <Services onSelectService={handleSelectService}/>
              <Cases/>
              <ContactUs prefill={inquiryPrefill}/>
              <WhyWeExist/>
          </div>
      </>
  )
}

function App() {
  return (
      <>
          <Banner/>

          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/mission" element={<MissionPage/>}/>
          </Routes>

          <GithubLink/>
      </>
  )
}

export default App
