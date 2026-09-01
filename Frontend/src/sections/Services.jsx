import './Services.css'
import { Trans, useTranslation } from "react-i18next";
import {scrollToSection, scrollToSectionOnClick} from "../scrollToSection.js";
import {useInquiry} from "../InquiryContext.jsx";
import {usePageLoadTime} from "../usePageLoadTime.js";

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
                        <p>{t('services.ai.description')}</p>
                        <button type="button" className="services-card-cta btn-secondary" onClick={() => handleSelect('ai')}>
                            {t('services.ai-select-cta')}
                        </button>
                    </div>
                    
                    <div className="services-card services-card--bespoke">
                        <h3>{t('services.bespoke.title')}</h3>
                        <p>
                            <Trans
                                i18nKey="services.bespoke.description"
                                components={{ casesLink: <a href="#cases" onClick={scrollToSectionOnClick('cases')} className="services-card-inline-link" /> }}
                            />
                        </p>
                        <button type="button" className="services-card-cta btn-secondary" onClick={() => handleSelect('bespoke')}>
                            {t('services.bespoke-select-cta')}
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
                            {t('services.website-select-cta')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
