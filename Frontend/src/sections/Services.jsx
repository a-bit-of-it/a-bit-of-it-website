import './Services.css'
import { useTranslation } from "react-i18next";
import {scrollToSection, scrollToSectionOnClick} from "../scrollToSection.js";
import {useInquiry} from "../InquiryContext.jsx";

export default function Services () {
    const { t } = useTranslation();
    const { setInquiry } = useInquiry();

    const offerings = ["website", "ai", "bespoke"];

    function handleSelect(key) {
        setInquiry(t(`services.${key}.prefill`));
        scrollToSection('contact');
    }

    return (
        <div className="services" id="services">
            <div className="section-inner">
                <h1>{t('services.header')}</h1>
                <p className="services-subtitle">{t('services.subtitle')}</p>

                <div className="services-grid">
                    {offerings.map((key) => (
                        <div className="services-card" key={key}>
                            <h3>{t(`services.${key}.title`)}</h3>
                            <p>{t(`services.${key}.description`)}</p>
                            <button type="button" className="services-card-cta btn-secondary" onClick={() => handleSelect(key)}>
                                {t('services.select-cta')}
                            </button>
                        </div>
                    ))}
                </div>

                <a href="#contact" className="services-cta btn-primary" onClick={scrollToSectionOnClick('contact')}>{t('services.cta')}</a>
            </div>
        </div>
    );
}
