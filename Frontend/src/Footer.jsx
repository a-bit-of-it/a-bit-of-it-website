import './Footer.css'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { scrollToSectionOnClick } from "./scrollToSection.js";

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <Link to="/" className="footer-logo">{t('name')}</Link>
                {/*<nav className="footer-nav">*/}
                {/*    <a href="#cases" onClick={scrollToSectionOnClick('cases')}>{t('banner.cases')}</a>*/}
                {/*    <Link to="/mission">{t('banner.why-we-exist')}</Link>*/}
                {/*    <Link to="/contact">{t('banner.get-in-touch')}</Link>*/}
                {/*</nav>*/}
                {/*<span className="footer-copyright">© {year} {t('name')}</span>*/}
            </div>
        </footer>
    );
}
