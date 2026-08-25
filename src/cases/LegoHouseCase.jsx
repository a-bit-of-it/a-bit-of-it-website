import {LegoHouseIcon, LegoIcon} from "../Icons.jsx";
import {AspDotNetTech, AzureTech, MsSqlTech, RabbitMqTech, ReactTech, UnityTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";
// The LEGO House projected started early 2023. Over time it became a 30 - 40 man team with varying competences in 

export default function LegoHouseCase() {
    return (
        <Case
            icons={[LegoIcon, LegoHouseIcon]}
            from="2023-03-01"
            to="2025-02-01"
            title="Rebuild Lego House from the group up... digitally"
            tech="TODO"
            techStack={[ReactTech, UnityTech, RabbitMqTech, AspDotNetTech, MsSqlTech, AzureTech]}
        />
    );
}