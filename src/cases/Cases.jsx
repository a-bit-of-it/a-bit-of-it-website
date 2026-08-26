import './Cases.css'
import ChemoMetecCase from "./ChemoMetecCase.jsx";
import LegoHouseCase from "./LegoHouseCase.jsx";
import LegoMaterialComplianceCase from "./LegoMaterialComplianceCase.jsx";
import LEGOSuperMarioCase from "./LegoSuperMarioCase.jsx";
import Divider from "../Divider.jsx";

export default function Cases () {
    return (
        <div className="cases" id="cases">
            <h1>Cases - (sorted by coolest)</h1>
            <LegoHouseCase/>
            <Divider/>
            <LegoMaterialComplianceCase/>
            <Divider/>
            <LEGOSuperMarioCase/>
            <Divider/>
            <ChemoMetecCase/>
        </div>
    )
}