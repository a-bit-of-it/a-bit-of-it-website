import {LegoHouseIcon, LegoIcon} from "../Icons.jsx";
import {AspDotNetTech, AzureTech, MsSqlTech, RabbitMqTech, ReactTech, TechStack, UnityTech} from "./TechStack.jsx";
import IconRow from "./IconRow.jsx";
import CaseTitle from "./CaseTitle.jsx";
import ForTheNerds from "./ForTheNerds.jsx";
// The LEGO House projected started early 2023. Over time it became a 30 - 40 man team with varying competences in 

export default function LegoHouseCase() {
    const tech = "TODO";
    return (
        <>
            <IconRow>
                <LegoIcon/>
                <LegoHouseIcon/>
            </IconRow>
            <CaseTitle title="Rebuild Lego House from the group up... digitally"/>
            <ForTheNerds text={tech}>
                <TechStack>
                    <ReactTech/>
                    <UnityTech/>
                    <RabbitMqTech/>
                    <AspDotNetTech/>
                    <MsSqlTech/>
                    <AzureTech/>
                </TechStack>
            </ForTheNerds>
        </>
    );
}