import './Purpose.css';
import {useTranslation} from "react-i18next";
import SectionHeading from "../../components/SectionHeading.jsx";
import PageMeta from "../../components/PageMeta.jsx";
import GithubLink from "./components/GithubLink.jsx";

export default function Purpose() {
    const { t } = useTranslation();

    return (
        <div className="purpose">
            <PageMeta title={t('seo.purpose.title')} description={t('seo.purpose.description')} />
            <div className="section">
                <SectionHeading
                    id="our-purpose"
                    header={t('our-purpose.header')}
                    subtitle={t('our-purpose.subtitle')}
                />
                <div className="values-grid">
                    <div className="values-card card">
                        <h3>{t('our-purpose.values.transparency.header')}</h3>
                        <p>{t('our-purpose.values.transparency.text')}</p>
                        <GithubLink/>
                    </div>

                    <div className="values-card card">
                        <h3>{t('our-purpose.values.fairness.header')}</h3>
                        <p>{t('our-purpose.values.fairness.text')}</p>
                    </div>

                    <div className="values-card card">
                        <h3>{t('our-purpose.values.freedom.header')}</h3>
                        <p>{t('our-purpose.values.freedom.text')}</p>
                    </div>
                </div>
            </div>

            <div className="lumi-wrapper">
                <div className="lumi-card card">
                    <img className="lumi-photo" src="/Lumi.jpg" alt={t('our-purpose.lumi.name')} />
                    <div className="lumi-info">
                        <h3>{t('our-purpose.lumi.name')}</h3>
                        <span className="lumi-role">{t('our-purpose.lumi.role')}</span>
                        <p>{t('our-purpose.lumi.bio')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
