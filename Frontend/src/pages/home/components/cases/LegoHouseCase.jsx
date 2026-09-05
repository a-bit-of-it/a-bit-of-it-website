import {AspDotNetTech, AzureTech, MsSqlTech, RabbitMqTech, UnityTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";
import {useTranslation} from "react-i18next";
import {LegoHouseIcon, LegoIcon} from "../../../../Icons.jsx";
import TransLink from "../../../../components/TransLink.jsx";

export default function LegoHouseCase() {
    const { t } = useTranslation();
    return (
        <Case
            icons={[LegoIcon, LegoHouseIcon]}
            title={t('cases.legohouse.header')}
            images={["/FishDesigner.jpg", "/MoodMixer.jpg"]}
            problem={t('cases.legohouse.problem')}
            solution={
                <TransLink
                    i18nKey="cases.legohouse.solution"
                    href="https://www.linkedin.com/posts/soandersen_oneteam-legohouse-ultimateexperience-activity-7291816053238648833-UDJm"
                    className="case-block-link"
                />
            }
            tech={t('cases.legohouse.tech')}
            techStack={[UnityTech, AspDotNetTech, AzureTech, RabbitMqTech, MsSqlTech]}
        />
    );
}