import './Services.css'
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
import {AiIcon, CustomIcon, WebsiteIcon} from "../../../Icons.jsx";
import {H2Heading} from "../../../components/Heading.jsx";
import {usePageLoadTime} from "../../../utilities/usePageLoadTime.js";

export default function Services () {
    const { t } = useTranslation();
    const loadTimeMs = usePageLoadTime();

    return (
        <div className="services" >
            <div className="section">
                <H2Heading id="services" header={t('services.header')} subtitle={t('services.subtitle')} />

                <div className="services-grid">
                    <div className="services-card services-card--ai">
                        <div className="services-card-header">
                            <AiIcon />
                            <h3>{t('services.ai.title')}</h3>
                        </div>
                        <div className="ai-examples">
                            <div className="ai-example">
                                <p>{t('services.ai.example1')}</p>
                            </div>
                            <div className="ai-example">
                                <p>{t('services.ai.example2')}</p>
                            </div>
                            <div className="ai-example">
                                <p>{t('services.ai.example3')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="services-card services-card--bespoke">
                        <div className="services-card-header">
                            <CustomIcon />
                            <h3>{t('services.bespoke.title')}</h3>
                        </div>
                        <p>{t('services.bespoke.p1')}</p>
                        <p>{t('services.bespoke.p2')}</p>
                    </div>

                    <div className="services-card services-card--website">
                        <div className="services-card-header">
                            <WebsiteIcon />
                            <h3>{t('services.website.title')}</h3>
                        </div>
                        <p>{t('services.website.p1')}</p>
                        <p>{t('services.website.p2')}</p>
                        {loadTimeMs !== null && (
                            <p className="highlight">{t('services.website.load-time', { time: loadTimeMs })}</p>
                        )}
                        <p>{t('services.website.p3')}</p>
                    </div>
                </div>

                <Link to="/contact" className="services-cta btn-primary">
                    {t('get-in-touch.header')}
                </Link>
            </div>
        </div>
    );
}
