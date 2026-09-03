import './WhyWeExist.css'
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import GithubLink from "../GithubLink.jsx";

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

    const values = [
        {
            key: "transparency",
            title: "Transparency",
            text: "We believe in developing honest software and showing transparency in our work. We invite everyone to view and scrutinize the code behind our solutions (GitHub link).",
        },
        {
            key: "freedom",
            title: "Freedom",
            text: "We believe in working from home. Excellent problem solving skills require no office or daily commute. It requires trust",
        },
    ];
    {/*<p className="why-we-exist-subtitle">*/}
    {/*    /!*{t('why-we-exist.subtitle')}*!/*/}
    {/*    /!*<Trans i18nKey="why-we-exist.subtitle" components={{ missionLink: <Link to="/mission"/> }} />*!/*/}
    {/*</p>*/}
    return (
        <div className="why-we-exist">
            <div className="section-inner">
                <h1 className="header" id="why-we-exist">{t('why-we-exist.header')}</h1>
                <p className="subtitle">We are a small team from Aalborg, Denmark, who wants to enable cool people build their cool ideas. We give small business owners, selling clothes out of their garage, the website of their dreams.
                    We give the 500 person company, working to eliminate poverty, a state of the art cashflow system.
                    We solve real problems, large and small, then step out of their way. </p>
                <div className = "values">
                    <div className = "value">
                        <h3>Transparency</h3>
                        <p>We believe in developing honest software and showing transparency in our work.
                            We invite everyone with technical interest to scrutinize the code behind our solutions.</p>
                        <GithubLink/>
                    </div>
                    
                    <div className = "value">
                        <h3>Fairness</h3>
                        <p>
                            We believe the value created by our work should be shared fairly.
                            A fair model means better value for customers and better compensation for those that choose to work for us.
                        </p>
                    </div>
                    
                    <div className = "value">
                        <h3>Freedom</h3>
                        <p> We believe that excellent problem solving skills require no office or daily commute. 
                            It requires trust. 
                            We enable those who choose to work for us with the freedom of working from wherever they like.</p>
                    </div>
                </div>

                

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
        </div>
    );
}
