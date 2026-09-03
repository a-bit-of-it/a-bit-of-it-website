import {AspDotNetTech, AzureTech, MsSqlTech, RabbitMqTech, UnityTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";
import {useTranslation} from "react-i18next";
import {LegoHouseIcon, LegoIcon} from "../../Icons.jsx"; 

export default function LegoHouseCase() {
    const { t } = useTranslation();
    return (
        <Case
            icons={[LegoIcon, LegoHouseIcon]}
            from="2023-03-01"
            to="2025-02-01"
            title={t('cases.legohouse.header')}
            images={["/FishDesigner.jpg", "/MoodMixer.jpg"]}
            summary={t('cases.legohouse.summary')}
            tech={t('cases.legohouse.tech')}
            techStack={[UnityTech, AspDotNetTech, AzureTech, RabbitMqTech, MsSqlTech]}
        />
    );
}