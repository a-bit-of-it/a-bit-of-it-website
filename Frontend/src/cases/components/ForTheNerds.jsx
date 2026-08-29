import './ForTheNerds.css';
import {useState} from "react";
import {useTranslation} from "react-i18next";

export default function ForTheNerds({ text, children }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="for-the-nerds">
            <button type="button" className="for-the-nerds-toggle" onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen}>
                <span className="for-the-nerds-title">{t('cases.geeks')}</span>
                <span className={`for-the-nerds-chevron ${isOpen ? "for-the-nerds-chevron-open" : ""}`}>
                    ▾
                </span>
            </button>
            
            <div className={`for-the-nerds-collapse ${isOpen ? "for-the-nerds-collapse-open" : ""}`}>
                <div className="for-the-nerds-collapse-inner">
                    <div className="for-the-nerds-panel">
                        <span className="for-the-nerds-technology-used">Technologies used:</span>
                        {children}
                        <span className="for-the-nerds-text">{text}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}