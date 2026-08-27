import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import WhoWeAre from "./WhoWeAre.jsx";
import Cases from "./Cases.jsx";
import ContactUs from "./ContactUs.jsx";

function App() {
  return (
      <>
          <Banner/>
          <Hero/>

          <div className="app">
              <Cases/>
              <ContactUs/>
              <WhoWeAre/>
          </div>
      </>
  )
}

export default App
