import {AspDotNetTech, AzureTech, MsSqlTech, ReactTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";
import {LegoIcon} from "../../../../Icons.jsx";
import {useTranslation} from "react-i18next";

export default function LegoMaterialComplianceCase() {
    const { t } = useTranslation();

    return (
        <Case
            icons={[LegoIcon]}
            title="Ensuring the LEGO brick's quality"
            images={[]}
            problem={t('cases.lego-material-and-compliance.problem')}
            solution={t('cases.lego-material-and-compliance.solution')}
            tech={t('cases.lego-material-and-compliance.tech')}
            techStack={[ReactTech, AspDotNetTech, MsSqlTech, AzureTech]}
        />
    );
}