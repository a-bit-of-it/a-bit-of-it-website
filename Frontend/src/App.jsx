import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import { InquiryProvider } from "./InquiryContext.jsx";
import Cases from "./sections/Cases.jsx";
import Services from "./sections/Services.jsx";
import GetInTouch from "./sections/GetInTouch.jsx";
import WhyWeExist from "./sections/WhyWeExist.jsx";

function App() {
  return (
      <>
          <Banner/>
          <Hero/>
          <div className="app">
              <InquiryProvider>
                  <Cases/>
                  <Services/>
                  <GetInTouch/>
                  <WhyWeExist/>
              </InquiryProvider>
          </div>
      </>
  )
}

export default App
