import './Services.css'
import { useTranslation } from "react-i18next";

export default function Services () {
    const { t } = useTranslation();

    const offerings = ["website", "ai", "bespoke"];

    return (
        <div className="services" id="services">
            <h1>{t('services.header')}</h1>
            <p className="services-subtitle">{t('services.subtitle')}</p>

            <div className="services-grid">
                {offerings.map((key) => (
                    <div className="services-card" key={key}>
                        <h3>{t(`services.${key}.title`)}</h3>
                        <p>{t(`services.${key}.description`)}</p>
                    </div>
                ))}
            </div>

            <a href="#contact" className="services-cta btn-primary">{t('services.cta')}</a>
        </div>
    );
}
