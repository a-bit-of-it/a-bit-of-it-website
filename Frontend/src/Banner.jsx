import './Banner.css'
import LanguageSwitch from './LanguageSwitch.jsx'
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHideOnScroll } from "./useHideOnScroll.js";

export default function Banner() {
    const { t } = useTranslation();
    const hidden = useHideOnScroll();
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className={`banner${hidden ? ' banner--hidden' : ''}`}>
            <div className="banner-content">
                <Link to="/" className="banner-logo" onClick={closeMenu}>{t('name')}</Link>
                <div className="banner-actions">
                    <nav className="navigation">
                        <Link to="/purpose">{t('banner.why-we-exist')}</Link>
                    </nav>
                    <Link to="/contact" className="banner-cta">{t('banner.get-in-touch')}</Link>
                    <LanguageSwitch />
                </div>
                <button
                    type="button"
                    className="banner-menu-toggle"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-expanded={menuOpen}
                    aria-label={t('banner.menu')}
                >
                    <span className="banner-menu-bar" />
                    <span className="banner-menu-bar" />
                    <span className="banner-menu-bar" />
                </button>
            </div>
            {menuOpen && (
                <div className="banner-mobile-menu">
                    <nav className="navigation">
                        <Link to="/purpose" onClick={closeMenu}>{t('banner.why-we-exist')}</Link>
                    </nav>
                    <Link to="/contact" className="banner-cta" onClick={closeMenu}>{t('banner.get-in-touch')}</Link>
                    <LanguageSwitch />
                </div>
            )}
        </header>
    );
}
