import './Banner.css'
import LanguageSwitch from './LanguageSwitch.jsx'
import {useTranslation} from "react-i18next";

export default function Banner() {
    const { t } = useTranslation();

    return (
        <header className="banner">
            <div className="banner-content">
                <a href="#" className="banner-logo">a bit of IT</a>
                <div className="banner-actions">
                    <nav className="navigation">
                        <a href="#cases">{t('banner.cases')}</a>
                        <a href="#about">{t('banner.who-we-are')}</a>
                        <a href="#contact">{t('banner.get-in-touch')}</a>
                    </nav>
                    <LanguageSwitch />
                </div>
            </div>
        </header>
    );
}
