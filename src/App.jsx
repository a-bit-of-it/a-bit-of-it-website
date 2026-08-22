import './App.css'
import LegoSuperMarioCase from "./cases/LegoSuperMarioCase";
import LegoHouseCase from "./cases/LegoHouseCase.jsx";
import LegoMaterialComplianceCase from "./cases/LegoMaterialComplianceCase.jsx";
import ChemoMetecCase from "./cases/ChemoMetecCase.jsx";

function App() {
  return (
    <>
        <p>A cool place, with cool people, who do cool stuff</p>
        <p>A cool place, with nice people, who do awesome stuff</p>
        <p>If you are technically inclined, feel free to visit our <a href="https://github.com/a-bit-of-it" target="_blank" rel="noopener noreferrer">GitHub</a> where you can view all our dirty laundry.</p>
        <p>You will find no corporate speak here - only cool shit</p>
        <p>We can do all the AI you want!</p>
        <p>The things we've helped create:</p>
        <LegoSuperMarioCase/>
        <LegoHouseCase/>
        <LegoMaterialComplianceCase/>
        <ChemoMetecCase/>
      {/*<p className="title">LEGO Super Mario</p>*/}
        
        
        
      <p className="title">We are doing <i>a-bit-of-it</i> here</p>
      <p className="subtitle">Check back soon</p>
      <p className="subtitle">👑</p>
    </>
  )
}

export default App
