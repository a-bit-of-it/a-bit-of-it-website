import './Hero.css'
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-content">
                <p>{t('welcome.title')}</p>
                <p className="hero-kicker">Cool people. Cool tech.</p>
                <h1 className="hero-headline">We do not sell software. We create solutions.</h1>
                <p className="hero-subline">
                    Site is under heavy construction
                </p>
                <a href="#cases" className="hero-cta">See what we've built</a>
            </div>
        </section>
    );
}
