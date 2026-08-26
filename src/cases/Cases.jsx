import './Cases.css'
import ChemoMetecCase from "./ChemoMetecCase.jsx";
import LegoHouseCase from "./LegoHouseCase.jsx";
import LegoMaterialComplianceCase from "./LegoMaterialComplianceCase.jsx";
import LEGOSuperMarioCase from "./LegoSuperMarioCase.jsx";

export default function Cases () {
    return (
        <div className="cases" id="cases">
            <LegoHouseCase/>
            <LegoMaterialComplianceCase/>
            <LEGOSuperMarioCase/>
            <ChemoMetecCase/>
        </div>
    )
}
