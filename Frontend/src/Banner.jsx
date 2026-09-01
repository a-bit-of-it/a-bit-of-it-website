import './Banner.css'
import LanguageSwitch from './LanguageSwitch.jsx'
import {useTranslation} from "react-i18next";
import { scrollToSectionOnClick } from "./scrollToSection.js";

export default function Banner() {
    const { t } = useTranslation();

    return (
        <header className="banner">
            <div className="banner-content">
                <a href="#" className="banner-logo">a bit of IT</a>
                <div className="banner-actions">
                    <nav className="navigation">
                        <a href="#cases" onClick={scrollToSectionOnClick('cases')}>{t('banner.cases')}</a>
                        <a href="#why-we-exist" onClick={scrollToSectionOnClick('why-we-exist')}>{t('banner.why-we-exist')}</a>
                        <a href="#contact" onClick={scrollToSectionOnClick('contact')}>{t('banner.get-in-touch')}</a>
                    </nav>
                    <LanguageSwitch />
                </div>
            </div>
        </header>
    );
}
