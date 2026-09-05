import './Services.css'
// import '../App.css'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {AccountingIcon, AgentIcon, ResearchIcon} from "../../../Icons.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";
import {usePageLoadTime} from "../../../utilities/usePageLoadTime.js";

export default function Services () {
    const { t } = useTranslation();
    const loadTimeMs = usePageLoadTime();
    const navigate = useNavigate();

    function handleSelect() {
        navigate('/contact');
    }

    return (
        <div className="services" >
            <div className="section">
                <SectionHeading id="services" header={t('services.header')} subtitle={t('services.subtitle')} />

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
                    </div>
                    
                    <div className="services-card services-card--bespoke">
                        <h3>{t('services.bespoke.title')}</h3>
                        <p>{t('services.bespoke.p1')}</p>
                        <p>{t('services.bespoke.p2')}</p>
                    </div>

                    <div className="services-card services-card--website">
                        <h3>{t('services.website.title')}</h3>
                        <p>{t('services.website.p1')}</p>
                        <p>{t('services.website.p2')}</p>
                        {loadTimeMs !== null && (
                            <p className="highlight">{t('services.website.load-time', { time: loadTimeMs })}</p>
                        )}
                        <p>{t('services.website.p3')}</p>
                    </div>
                    <button type="button" className="services-card-cta btn-primary" onClick={() => handleSelect()}>
                        {t('get-in-touch.header')}
                    </button>
                </div>
            </div>
        </div>
    );
}
