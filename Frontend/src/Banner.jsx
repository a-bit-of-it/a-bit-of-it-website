import './Banner.css'
import LanguageSwitch from './LanguageSwitch.jsx'
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHideOnScroll } from "./useHideOnScroll.js";

export default function Banner() {
    const { t } = useTranslation();
    const hidden = useHideOnScroll();
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    useEffect(() => {
        if (hidden) {
            closeMenu();
        }
    }, [hidden]);

    return (
        <header className={`banner${hidden ? ' banner--hidden' : ''}`}>
            <div className="banner-content">
                <BannerButtons/>
                <Hamburger/>
            </div>
            {menuOpen && (
                <HamburgerMenu/>
            )}
        </header>
    );

    function BannerButtons () {
        return (
            <>
                <Link to="/" className="banner-logo" onClick={closeMenu}>{t('name')}</Link>
                <div className="banner-actions">
                    <nav className="navigation">
                        <Link to="/purpose">{t('banner.why-we-exist')}</Link>
                    </nav>
                    <Link to="/contact" className="btn-primary">{t('banner.get-in-touch')}</Link>
                    <LanguageSwitch />
                </div>
            </>
        )
    }

    function Hamburger () {
        return (
            <>
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
            </>
        )
    }

    function HamburgerMenu () {
        return (
            <>
                <div className="banner-mobile-menu">
                    <nav className="navigation">
                        <Link to="/purpose" onClick={closeMenu}>{t('banner.why-we-exist')}</Link>
                    </nav>
                    <Link to="/contact" className="btn-primary" onClick={closeMenu}>{t('banner.get-in-touch')}</Link>
                    <LanguageSwitch />
                </div>
            </>
        )
    }
}
