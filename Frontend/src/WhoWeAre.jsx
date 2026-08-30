import './WhoWeAre.css'
import {useTranslation} from "react-i18next";

export default function WhoWeAre () {
    const { t } = useTranslation();

    return (
        <div className="who-we-are" id="who-we-are">
            <h1>{t('who-we-are.header')}</h1>
            <img key="lumi" src="/Lumi.jpg" alt="" />
        </div>
    );
}