import './Services.css'
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
import {AiIcon, CustomIcon, WebsiteIcon} from "../../../Icons.jsx";
import {H2Heading} from "../../../components/Heading.jsx";
import Eyebrow from "../../../components/Eyebrow.jsx";
import {usePageLoadTime} from "../../../utilities/usePageLoadTime.js";
import TransText from "../../../components/TransText.jsx";

export default function Services () {
    const { t } = useTranslation();
    const loadTimeMs = usePageLoadTime();

    return (
        <div className="services" >
            <div className="section">
                <H2Heading id="services" header={t('services.header')} subtitle={t('services.subtitle')} />

                <div className="services-grid">
                    <div className="services-card services-card--ai card">
                        <div className="services-card-header">
                            <AiIcon />
                            <Eyebrow level="h3">{t('services.ai.title')}</Eyebrow>
                        </div>
                        <div className="ai-examples">
                            <div className="ai-example">
                                <p>{t('services.ai.example1')}</p>
                            </div>
                            <div className="ai-example">
                                <p>{t('services.ai.example2')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="services-card services-card--bespoke card">
                        <div className="services-card-header">
                            <CustomIcon />
                            <Eyebrow level="h3">{t('services.bespoke.title')}</Eyebrow>
                        </div>
                        <p>{t('services.bespoke.p1')}</p>
                    </div>

                    <div className="services-card services-card--website card">
                        <div className="services-card-header">
                            <WebsiteIcon />
                            <Eyebrow level="h3">{t('services.website.title')}</Eyebrow>
                        </div>
                        <p>{t('services.website.p1')}</p>
                        {loadTimeMs !== null && (
                            <p>
                                <TransText
                                    i18nKey="services.website.load-time"
                                    values={{ time: loadTimeMs }}
                                    components={{ highlight: <span className="highlight" /> }}
                                />
                            </p>
                        )}
                        <p>{t('services.website.p2')}</p>
                    </div>
                </div>

                <Link to="/contact" className="services-cta btn-primary">
                    {t('get-in-touch.header')}
                </Link>
            </div>
        </div>
    );
}
