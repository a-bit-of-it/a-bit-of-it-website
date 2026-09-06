import './Home.css';
import {useTranslation} from "react-i18next";
import Cases from "./components/Cases.jsx";
import Services from "./components/Services.jsx";
import Hero from "./components/Hero.jsx";
import PageMeta from "../../components/PageMeta.jsx";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="page">
            <PageMeta title={t('seo.home.title')} description={t('seo.home.description')} />
            <Hero/>
            <div className="app">
                <Cases/>
                <Services/>
            </div>
        </div>
    );
}
