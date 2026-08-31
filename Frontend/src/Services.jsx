import './Services.css'
import { useTranslation } from "react-i18next";

export default function Services ({ onSelectService }) {
    const { t } = useTranslation();

    const offerings = ["website", "ai", "bespoke"];

    function handleSelect(key) {
        onSelectService(t(`services.${key}.prefill`));
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
                            <button
                                type="button"
                                className="services-card-cta btn-secondary"
                                onClick={() => handleSelect(key)}
                            >
                                {t('services.select-cta')}
                            </button>
                        </div>
                    ))}
                </div>

                <a href="#contact" className="services-cta btn-primary">{t('services.cta')}</a>
            </div>
        </div>
    );
}
