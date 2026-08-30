import './WhyWeExist.css'
import { useTranslation } from "react-i18next";

const MATHIAS_START_DATE = new Date(2018, 8, 1);

function timeSince(startDate) {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
}

export default function WhyWeExist () {
    const { t } = useTranslation();
    const { years, months, days } = timeSince(MATHIAS_START_DATE);

    const team = [
        { key: "mathias", image: "/MathiasCropped.png", bioValues: { X: years, Y: months, Z: days } },
        { key: "lumi", image: "/LumiWithTongueCropped.jpg" },
    ];

    return (
        <div className="why-we-exist" id="why-we-exist">
            <h1>{t('why-we-exist.header')}</h1>
            <p className="why-we-exist-subtitle">{t('why-we-exist.subtitle')}</p>

            <div className="team-grid">
                {team.map(({ key, image, bioValues }) => (
                    <div className="team-card" key={key}>
                        <img className="team-card-photo" src={image} alt={t(`why-we-exist.${key}.name`)} />
                        <h3>{t(`why-we-exist.${key}.name`)}</h3>
                        <span className="team-card-role">{t(`why-we-exist.${key}.role`)}</span>
                        <p>{t(`why-we-exist.${key}.bio`, bioValues)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
