import './WhyWeExist.css'
import { useTranslation } from "react-i18next";

const team = [
    { key: "mathias", image: "/MathiasCropped.png" },
    { key: "lumi", image: "/LumiWithTongueCropped.jpg" },
];

export default function WhyWeExist () {
    const { t } = useTranslation();

    return (
        <div className="why-we-exist" id="why-we-exist">
            <h1>{t('why-we-exist.header')}</h1>
            <p className="why-we-exist-subtitle">{t('why-we-exist.subtitle')}</p>

            <div className="team-grid">
                {team.map(({ key, image }) => (
                    <div className="team-card" key={key}>
                        <img className="team-card-photo" src={image} alt={t(`why-we-exist.${key}.name`)} />
                        <h3>{t(`why-we-exist.${key}.name`)}</h3>
                        <span className="team-card-role">{t(`why-we-exist.${key}.role`)}</span>
                        <p>{t(`why-we-exist.${key}.bio`)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
