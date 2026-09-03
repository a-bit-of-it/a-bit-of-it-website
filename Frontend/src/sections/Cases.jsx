import './Cases.css'
import './Sections.css'
import SectionHeading from "./SectionHeading.jsx";
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
                <SectionHeading id="cases" header={t('cases.header')} subtitle={t('cases.subtitle')} />
                <LegoHouseCase/>
                <LEGOSuperMarioCase/>
                <LegoMaterialComplianceCase/>
                <ChemoMetecCase/>
            </div>
        </div>
    )
}
