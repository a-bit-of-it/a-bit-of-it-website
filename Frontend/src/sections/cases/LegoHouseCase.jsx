import {AspDotNetTech, AzureTech, MsSqlTech, RabbitMqTech, UnityTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";
import {Trans, useTranslation} from "react-i18next";
import {LegoHouseIcon, LegoIcon} from "../../Icons.jsx";

export default function LegoHouseCase() {
    const { t } = useTranslation();
    return (
        <Case
            icons={[LegoIcon, LegoHouseIcon]}
            title={t('cases.legohouse.header')}
            images={["/FishDesigner.jpg", "/MoodMixer.jpg"]}
            backgroundImage="/LEGOHouse.jpg"
            problem={t('cases.legohouse.problem')}
            solution={
                <Trans
                    i18nKey="cases.legohouse.solution"
                    components={{
                        linkedin: (
                            <a
                                className="case-block-link"
                                href="https://www.linkedin.com/posts/soandersen_oneteam-legohouse-ultimateexperience-activity-7291816053238648833-UDJm"
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                        )
                    }}
                />
            }
            tech={t('cases.legohouse.tech')}
            techStack={[UnityTech, AspDotNetTech, AzureTech, RabbitMqTech, MsSqlTech]}
        />
    );
}