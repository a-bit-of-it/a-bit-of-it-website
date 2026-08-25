import './App.css'
import Banner from "./Banner";
import Cases from "./cases/Cases.jsx";
import WhoWeAre from "./WhoWeAre.jsx";

function App() {
  return (
      <>
          <Banner/>
          <div className="app">
              <span>This page is work in progress... obviously.</span>
              <p>We just want to build cool stuff. Let us show you some of what we have built so far.</p>
              <Cases/>
              <WhoWeAre/>
          </div>
      </>
  )
}

{/*<h1>Cases</h1>*/}
{/*<span>A cool place, with cool psdfsfeople, who do cool stuff</span>*/}
{/*<span>A cool place, with nice people, who do awesome stuff</span>*/}
{/*<span>If you are technically inclined, feel free to visit our <a href="https://github.com/a-bit-of-it" target="_blank" rel="noopener noreferrer">GitHub</a> where you can view all our dirty laundry.</span>*/}
{/*<span>You will find no corporate speak here - only cool shit</span>*/}
{/*<span>We can do all the AI you want!</span>*/}
{/*<span>The things we've helped create:</span>*/}
{/*<span>X has 2913 days of experience (yes, we are counting...)</span>*/}

export default App
