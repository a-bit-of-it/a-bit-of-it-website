import './Cases.css'
import './Sections.css'
import LegoHouseCase from "./cases/LegoHouseCase.jsx";
import LEGOSuperMarioCase from "./cases/LegoSuperMarioCase.jsx";
import LegoMaterialComplianceCase from "./cases/LegoMaterialComplianceCase.jsx";
import ChemoMetecCase from "./cases/ChemoMetecCase.jsx";
import {useTranslation} from "react-i18next";

export default function Cases () {
    const { t } = useTranslation();

    return (
        <div className="cases">
            <div className="section">
                <h1 className="section-header" id="cases">{t('cases.header')}</h1>
                <p className="section-subtitle">{t('cases.subtitle')} </p>
                <LegoHouseCase/>
                <LEGOSuperMarioCase/>
                <LegoMaterialComplianceCase/>
                <ChemoMetecCase/>
            </div>
        </div>
    )
}
