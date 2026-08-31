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
import { InquiryProvider } from "./InquiryContext.jsx";

function HomePage() {
  return (
      <>
          <Hero/>

          <div className="app">
              <InquiryProvider>
                  <Services/>
                  <Cases/>
                  <ContactUs/>
                  <WhyWeExist/>
              </InquiryProvider>
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
