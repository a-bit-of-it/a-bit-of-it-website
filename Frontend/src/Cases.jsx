import './Cases.css'
import LegoHouseCase from "./cases/LegoHouseCase.jsx";
import LegoMaterialComplianceCase from "./cases/LegoMaterialComplianceCase.jsx";
import LEGOSuperMarioCase from "./cases/LegoSuperMarioCase.jsx";
import ChemoMetecCase from "./cases/ChemoMetecCase.jsx";
import {useTranslation} from "react-i18next";

export default function Cases () {
    const { t } = useTranslation();

    return (
        <div className="cases" id="cases">
            <h1>{t('cases.header')}</h1>
            <LegoHouseCase/>
            <LegoMaterialComplianceCase/>
            <LEGOSuperMarioCase/>
            <ChemoMetecCase/>
        </div>
    )
}
