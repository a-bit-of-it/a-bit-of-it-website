import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import Services from "./Services.jsx";
import Cases from "./Cases.jsx";
import ContactUs from "./ContactUs.jsx";
import WhyWeExist from "./WhyWeExist.jsx";

function App() {
  return (
      <>
          <Banner/>
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

export default App
