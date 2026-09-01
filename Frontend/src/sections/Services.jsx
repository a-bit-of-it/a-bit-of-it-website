import './Services.css'
import { Trans, useTranslation } from "react-i18next";
import {scrollToSection, scrollToSectionOnClick} from "../scrollToSection.js";
import {useInquiry} from "../InquiryContext.jsx";
import {usePageLoadTime} from "../usePageLoadTime.js";

const svgIconProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

function AccountingIcon() {
    return (
        <svg {...svgIconProps} aria-hidden="true">
            <path d="M6 3h9l3 3v15H6z" />
            <path d="M9 9h6M9 12h6M9 15h3" />
            <circle cx="17" cy="17" r="3" />
            <path d="M15.5 17l1 1 2-2" />
        </svg>
    );
}

function AgentIcon() {
    return (
        <svg {...svgIconProps} aria-hidden="true">
            <path d="M4 5h16v11H8l-4 4z" />
            <circle cx="9" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
            <circle cx="12" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
            <circle cx="15" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    );
}

function ResearchIcon() {
    return (
        <svg {...svgIconProps} aria-hidden="true">
            <path d="M6 3h8l4 4v14H6z" />
            <path d="M9 9h6M9 12h4" />
            <circle cx="16" cy="17" r="3" />
            <path d="M18.2 19.2L21 22" />
        </svg>
    );
}

export default function Services () {
    const { t } = useTranslation();
    const { selectInquiry } = useInquiry();
    const loadTimeMs = usePageLoadTime();

    function handleSelect(key) {
        selectInquiry(t(`services.${key}.prefill`));
        scrollToSection('contact');
    }

    return (
        <div className="services" id="services">
            <div className="section-inner">
                <h1>{t('services.header')}</h1>
                <p className="services-subtitle">{t('services.subtitle')}</p>

                <div className="services-grid">
                    <div className="services-card services-card--ai">
                        <h3>{t('services.ai.title')}</h3>
                        <div className="ai-examples">
                            <div className="ai-example">
                                <AccountingIcon />
                                <p>{t('services.ai.example1')}</p>
                            </div>
                            <div className="ai-example">
                                <AgentIcon />
                                <p>{t('services.ai.example2')}</p>
                            </div>
                            <div className="ai-example">
                                <ResearchIcon />
                                <p>{t('services.ai.example3')}</p>
                            </div>
                        </div>
                        <button type="button" className="services-card-cta btn-secondary" onClick={() => handleSelect('ai')}>
                            {t('services.ai.cta')}
                        </button>
                    </div>
                    
                    <div className="services-card services-card--bespoke">
                        <h3>{t('services.bespoke.title')}</h3>
                        <p>{t('services.bespoke.p1')}</p>
                        <p>{t('services.bespoke.p2')}</p>
                        <button type="button" className="services-card-cta btn-primary" onClick={scrollToSectionOnClick('cases')}>
                            {t('services.bespoke.cta')}
                        </button>
                    </div>

                    <div className="services-card services-card--website">
                        <h3>{t('services.website.title')}</h3>
                        <p>{t('services.website.p1')}</p>
                        <p>{t('services.website.p2')}</p>
                        {loadTimeMs !== null && (
                            <p className="services-card-examples">{t('services.website.load-time', { time: loadTimeMs })}</p>
                        )}
                        <p>{t('services.website.p3')}</p>
                        <button type="button" className="services-card-cta btn-secondary" onClick={() => handleSelect('website')}>
                            {t('services.website.cta')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
