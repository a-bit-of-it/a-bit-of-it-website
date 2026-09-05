import './CaseBlock.css'
import { useTranslation } from "react-i18next";

export default function CaseProblem({ text }) {
    const { t } = useTranslation();
    return (
        <div className="case-block">
            <h4 className="case-block-header">{t('cases.problem')}</h4>
            <p className="case-block-text">{text}</p>
        </div>
    );
}
