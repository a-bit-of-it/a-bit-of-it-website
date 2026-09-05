import './Hero.css'
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <h1 className="hero-headline">
                <span>{t('hero.headline1')}</span>
                <span>{t('hero.headline2')}</span>
            </h1>
        </section>
    );
}
