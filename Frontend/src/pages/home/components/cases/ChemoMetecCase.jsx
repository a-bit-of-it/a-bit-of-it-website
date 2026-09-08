import Case from "./components/Case.jsx";
import {AiTech, PostgreSqlTech, PythonTech, ReactTech} from "./components/TechStack.jsx";
import {ChemoMetecIcon} from "../../../../Icons.jsx";
import {useTranslation} from "react-i18next";

export default function ChemoMetecCase() {
    const { t } = useTranslation();

    return (
        <Case
            icons={[ChemoMetecIcon]}
            title={t('cases.chemometec.header')}

            images={[]}
            problem={t('cases.chemometec.problem')}
            solution={t('cases.chemometec.solution')}
            tech={t('cases.chemometec.tech')}
            techStack={[ReactTech, PythonTech, PostgreSqlTech, AiTech]}
        />
    );
}