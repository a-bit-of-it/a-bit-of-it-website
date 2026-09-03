import './Banner.css'
import LanguageSwitch from './LanguageSwitch.jsx'
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
import { scrollToSectionOnClick } from "./scrollToSection.js";
import { useHideOnScroll } from "./useHideOnScroll.js";

export default function Banner() {
    const { t } = useTranslation();
    const hidden = useHideOnScroll();

    return (
        <header className={`banner${hidden ? ' banner--hidden' : ''}`}>
            <div className="banner-content">
                <Link to="/" className="banner-logo">{t('name')}</Link>
                <div className="banner-actions">
                    <nav className="navigation">
                        <a href="#cases" onClick={scrollToSectionOnClick('cases')}>{t('banner.cases')}</a>
                        <Link to="/mission">{t('banner.why-we-exist')}</Link>
                        <a href="#contact" onClick={scrollToSectionOnClick('contact')}>{t('banner.get-in-touch')}</a>
                    </nav>
                    <LanguageSwitch />
                </div>
            </div>
        </header>
    );
}
