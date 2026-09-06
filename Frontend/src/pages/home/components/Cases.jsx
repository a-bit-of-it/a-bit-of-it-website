import './Cases.css'
import LegoHouseCase from "./cases/LegoHouseCase.jsx";
import LEGOSuperMarioCase from "./cases/LegoSuperMarioCase.jsx";
import LegoMaterialComplianceCase from "./cases/LegoMaterialComplianceCase.jsx";
import ChemoMetecCase from "./cases/ChemoMetecCase.jsx";
import {useTranslation} from "react-i18next";
import {H2Heading} from "../../../components/Heading.jsx";
import TransText from "../../../components/TransText.jsx";

export default function Cases () {
    const { t } = useTranslation();

    return (
        <div className="cases">
            <div className="section">
                <H2Heading
                    id="cases"
                    header={t('cases.header')}
                    subtitle={<TransText i18nKey="cases.subtitle" components={{ highlight: <span className="highlight" /> }} />}
                />
                <LegoHouseCase/>
                <LEGOSuperMarioCase/>
                <LegoMaterialComplianceCase/>
                <ChemoMetecCase/>
            </div>
        </div>
    )
}
