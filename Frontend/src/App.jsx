import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import WhoWeAre from "./WhoWeAre.jsx";
import Services from "./Services.jsx";
import Cases from "./Cases.jsx";
import ContactUs from "./ContactUs.jsx";

function App() {
  return (
      <>
          <Banner/>
          <Hero/>

          <div className="app">
              <Services/>
              <Cases/>
              <ContactUs/>
              <WhoWeAre/>
          </div>
      </>
  )
}

export default App
