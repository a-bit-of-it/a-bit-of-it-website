import './Services.css'
import { useTranslation } from "react-i18next";
import {scrollToSection, scrollToSectionOnClick} from "../scrollToSection.js";
import {useInquiry} from "../InquiryContext.jsx";

export default function Services () {
    const { t } = useTranslation();
    const { selectInquiry } = useInquiry();

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
                            {t('services.select-cta')}
                        </button>
                    </div>
                    
                    <div className="services-card services-card--bespoke">
                        <h3>{t('services.bespoke.title')}</h3>
                        <p>{t('services.bespoke.description')}</p>
                        {/*<div className="services-card-examples">*/}
                        {/*    <p className="services-card-examples-label">{t('services.bespoke.examples-label')}</p>*/}
                        {/*    <ul>*/}
                        {/*        {t('services.bespoke.examples', { returnObjects: true }).map((example) => (*/}
                        {/*            <li key={example}>{example}</li>*/}
                        {/*        ))}*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        <p>sdf</p>
                        <button type="button" className="services-card-cta btn-secondary" onClick={() => handleSelect('bespoke')}>
                            {t('services.select-cta')}
                        </button>
                    </div>

                    <div className="services-card services-card--website">
                        <h3>{t('services.website.title')}</h3>
                        <p>{t('services.website.description')}</p>
                        <button type="button" className="services-card-cta btn-secondary" onClick={() => handleSelect('website')}>
                            {t('services.select-cta')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
