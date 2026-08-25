import './App.css'
import LegoSuperMarioCase from "./cases/LegoSuperMarioCase";
import LegoHouseCase from "./cases/LegoHouseCase";
import LegoMaterialComplianceCase from "./cases/LegoMaterialComplianceCase";
import ChemoMetecCase from "./cases/ChemoMetecCase";
import Banner from "./Banner";
import Divider from "./Divider.jsx";

function App() {
  return (
      <>
          <Banner/>
          <div className="app">
              {/*<h1>Cases</h1>*/}
              {/*<span>A cool place, with cool psdfsfeople, who do cool stuff</span>*/}
              {/*<span>A cool place, with nice people, who do awesome stuff</span>*/}
              {/*<span>If you are technically inclined, feel free to visit our <a href="https://github.com/a-bit-of-it" target="_blank" rel="noopener noreferrer">GitHub</a> where you can view all our dirty laundry.</span>*/}
              {/*<span>You will find no corporate speak here - only cool shit</span>*/}
              {/*<span>We can do all the AI you want!</span>*/}
              {/*<span>The things we've helped create:</span>*/}
              {/*<span>X has 2913 days of experience (yes, we are counting...)</span>*/}
              <LegoHouseCase/>
              <Divider/>
              <LegoMaterialComplianceCase/>
              <Divider/>
              <LegoSuperMarioCase/>
              <Divider/>
              <ChemoMetecCase/>
          </div>
      </>
  )
}

export default App
