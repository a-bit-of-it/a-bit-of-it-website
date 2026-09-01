import { Routes, Route } from "react-router-dom";
import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import GithubLink from "./GithubLink.jsx";
import { InquiryProvider } from "./InquiryContext.jsx";
import Services from "./sections/Services.jsx";
import Cases from "./Cases.jsx";
import ContactUs from "./sections/ContactUs.jsx";
import WhyWeExist from "./sections/WhyWeExist.jsx";

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
          </Routes>

          <GithubLink/>
      </>
  )
}

export default App
