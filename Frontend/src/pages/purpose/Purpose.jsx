import './Purpose.css';
import {useTranslation} from "react-i18next";
import SectionHeading from "../../components/SectionHeading.jsx";
import GithubLink from "./components/GithubLink.jsx";
import {timeSince} from "../../utilities/timeSince.js";

const MATHIAS_START_DATE = new Date(2018, 8, 1);

export default function Purpose() {
    const { t } = useTranslation();
    const { years, months, days } = timeSince(MATHIAS_START_DATE);

    const team = [
        { key: "mathias", image: "/MathiasCropped.png", bioValues: { X: years, Y: months, Z: days } },
        { key: "lumi", image: "/LumiWithTongueCropped.jpg" },
    ];
    
    return (
        <div className="purpose">
            <div className="section">
                <SectionHeading
                    id="our-purpose"
                    header={t('our-purpose.header')}
                    subtitle={t('our-purpose.subtitle')}
                />
                <div className = "values">
                    <div className = "value">
                        <h3>{t('our-purpose.values.transparency.header')}</h3>
                        <p>{t('our-purpose.values.transparency.text')}</p>
                        <GithubLink/>
                    </div>

                    <div className = "value">
                        <h3>{t('our-purpose.values.fairness.header')}</h3>
                        <p>{t('our-purpose.values.fairness.text')}</p>
                    </div>

                    <div className = "value">
                        <h3>{t('our-purpose.values.freedom.header')}</h3>
                        <p>{t('our-purpose.values.freedom.text')}</p>
                    </div>
                </div>

                <div className="team-grid">
                    {team.map(({ key, image, bioValues }) => (
                        <div className="team-card" key={key}>
                            <img className="team-card-photo" src={image} alt={t(`our-purpose.${key}.name`)} />
                            <h3>{t(`our-purpose.${key}.name`)}</h3>
                            <span className="team-card-role">{t(`our-purpose.${key}.role`)}</span>
                            <p>{t(`our-purpose.${key}.bio`, bioValues)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
