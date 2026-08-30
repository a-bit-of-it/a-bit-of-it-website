import { Routes, Route } from "react-router-dom";
import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import Cases from "./Cases.jsx";
import ContactUs from "./ContactUs.jsx";
import WhyWeExist from "./WhyWeExist.jsx";
import MissionPage from "./MissionPage.jsx";

function HomePage() {
  return (
      <>
          <Hero/>

          <div className="app">
              <Services/>
              <Cases/>
              <ContactUs/>
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
      </>
  )
}

export default App
