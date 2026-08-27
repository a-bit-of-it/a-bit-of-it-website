import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import WhoWeAre from "./WhoWeAre.jsx";
import Cases from "./Cases.jsx";

function App() {
  return (
      <>
          <Banner/>
          <Hero/>

          <div className="app">
              <Cases/>
              <WhoWeAre/>
          </div>
      </>
  )
}

export default App
