import { Routes, Route } from "react-router-dom";
import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import { InquiryProvider } from "./InquiryContext.jsx";
import Services from "./sections/Services.jsx";
import Cases from "./sections/Cases.jsx";
import ContactUs from "./sections/ContactUs.jsx";
import WhyWeExist from "./sections/WhyWeExist.jsx";

function App() {
  return (
      <>
          <Banner/>
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

export default App
