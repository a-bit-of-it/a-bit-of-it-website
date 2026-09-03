import './Cases.css'
import LegoHouseCase from "./cases/LegoHouseCase.jsx";
import LegoMaterialComplianceCase from "./cases/LegoMaterialComplianceCase.jsx";
import LEGOSuperMarioCase from "./cases/LegoSuperMarioCase.jsx";
import ChemoMetecCase from "./cases/ChemoMetecCase.jsx";
import {useTranslation} from "react-i18next";

export default function Cases () {
    const { t } = useTranslation();

    return (
        <div className="cases">
            <div className="section-inner">
                <h1 className="header" id="cases">{t('cases.header')}</h1>
                <p className="subtitle">{t('cases.subtitle')} </p>
                <LegoHouseCase/>
                <LegoMaterialComplianceCase/>
                <LEGOSuperMarioCase/>
                <ChemoMetecCase/>
            </div>
        </div>
    )
}
