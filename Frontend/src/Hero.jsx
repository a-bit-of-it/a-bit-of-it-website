import './Hero.css'
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-content">
                {/*<p className="hero-kicker">{t('hero.kicker')}</p>*/}
                <h1 className="hero-headline">{t('hero.headline')}</h1>
                <p className="hero-subline">{t('hero.subline')}</p>
                <a href="#cases" className="btn-primary">{t('hero.cta')}</a>
            </div>
        </section>
    );
}
