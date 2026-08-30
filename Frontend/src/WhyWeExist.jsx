import './WhyWeExist.css'
import { useTranslation } from "react-i18next";

const team = [
    { key: "mathias", image: "/MathiasCropped.png" },
    { key: "lumi", image: "/LumiCropped.jpg" },
];

export default function WhyWeExist () {
    const { t } = useTranslation();

    return (
        <div className="who-we-are" id="who-we-are">
            <h1>{t('why-we-exist.header')}</h1>
            <p className="who-we-are-subtitle">{t('who-we-are.subtitle')}</p>

            <div className="team-grid">
                {team.map(({ key, image }) => (
                    <div className="team-card" key={key}>
                        <img className="team-card-photo" src={image} alt={t(`who-we-are.${key}.name`)} />
                        <h3>{t(`who-we-are.${key}.name`)}</h3>
                        <span className="team-card-role">{t(`who-we-are.${key}.role`)}</span>
                        <p>{t(`who-we-are.${key}.bio`)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
