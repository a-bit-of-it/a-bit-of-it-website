import './CaseBlock.css'
import { useTranslation } from "react-i18next";
import Eyebrow from "../../../../../components/Eyebrow.jsx";

export default function CaseProblem({ text }) {
    const { t } = useTranslation();
    return (
        <div className="case-block">
            <Eyebrow level="h4">{t('cases.problem')}</Eyebrow>
            <p className="case-block-text">{text}</p>
        </div>
    );
}
