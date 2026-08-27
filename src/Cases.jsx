import './Cases.css'
import LegoHouseCase from "./cases/LegoHouseCase.jsx";
import LegoMaterialComplianceCase from "./cases/LegoMaterialComplianceCase.jsx";
import LEGOSuperMarioCase from "./cases/LegoSuperMarioCase.jsx";
import ChemoMetecCase from "./cases/ChemoMetecCase.jsx";


export default function Cases () {
    return (
        <div className="cases" id="cases">
            <h1>Cases</h1>
            <LegoHouseCase/>
            <LegoMaterialComplianceCase/>
            <LEGOSuperMarioCase/>
            <ChemoMetecCase/>
        </div>
    )
}
