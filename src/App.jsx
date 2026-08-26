import './App.css'
import Banner from "./Banner";
import Hero from "./Hero.jsx";
import Cases from "./cases/Cases.jsx";
import WhoWeAre from "./WhoWeAre.jsx";

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
