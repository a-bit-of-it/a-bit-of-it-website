import './Hero.css'
import { useTranslation } from 'react-i18next';
import { scrollToSectionOnClick } from "./scrollToSection.js";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-headline">
                    <span>{t('hero.headline1')}</span>
                    <span>{t('hero.headline2')}</span>
                </h1>
            </div>
        </section>
    );
}
