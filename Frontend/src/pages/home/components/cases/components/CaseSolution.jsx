import './CaseBlock.css'
import { useTranslation } from "react-i18next";

export default function CaseSolution({ text }) {
    const { t } = useTranslation();
    return (
        <div className="case-block">
            <h4 className="case-block-header">{t('cases.solution')}</h4>
            <p className="case-block-text">{text}</p>
        </div>
    );
}
