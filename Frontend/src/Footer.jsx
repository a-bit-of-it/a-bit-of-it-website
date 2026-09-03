import './Footer.css'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-content">
                <Link to="/" className="footer-logo">{t('name')}</Link>
            </div>
        </footer>
    );
}
