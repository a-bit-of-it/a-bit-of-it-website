import {AspDotNetTech, AzureTech, MsSqlTech, RabbitMqTech, UnityTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";
import {useTranslation} from "react-i18next";
import {LegoHouseIcon, LegoIcon} from "../../../../Icons.jsx";
import TransText from "../../../../components/TransText.jsx";

export default function LegoHouseCase() {
    const { t } = useTranslation();
    return (
        <Case
            icons={[LegoIcon, LegoHouseIcon]}
            title={t('cases.legohouse.header')}
            images={[
                { src: "/LEGOHouse.jpg", alt: t('cases.legohouse.images.exterior') },
                { src: "/FishDesigner.jpg", alt: t('cases.legohouse.images.fish-designer') },
                { src: "/MoodMixer.jpg", alt: t('cases.legohouse.images.mood-mixer') },
            ]}
            problem={t('cases.legohouse.problem')}
            solution={
                <TransText
                    i18nKey="cases.legohouse.solution"
                    components={{
                        a: (
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