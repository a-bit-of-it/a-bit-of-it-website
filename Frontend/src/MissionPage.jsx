import './MissionPage.css'
import { useTranslation } from "react-i18next";

export default function MissionPage () {
    const { t } = useTranslation();

    return (
        <div className="mission-page">
            <h1>{t('mission.header')}</h1>
            <p>{t('mission.body')}</p>
        </div>
    );
}
