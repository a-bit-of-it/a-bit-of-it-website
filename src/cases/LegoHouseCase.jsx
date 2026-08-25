import {LegoHouseIcon, LegoIcon} from "../Icons.jsx";
import TechStack, {AspDotNetTech, AzureTech, MsSqlTech, RabbitMqTech, ReactTech, UnityTech} from "./TechStack.jsx";
import IconRow from "./IconRow.jsx";
import CaseTitle from "./CaseTitle.jsx";
import CaseSummary from "./CaseSummary.jsx";

export default function LegoHouseCase (){
    const businessCaseText = "Rebuilding Lego House from the group up... digitally";
    return (
        <>
            <CaseTitle title="Lego House"/>
            <IconRow>
                <LegoIcon/>
                <LegoHouseIcon/>    
            </IconRow>
            <CaseSummary text={businessCaseText}/>
            <TechStack>
                <ReactTech/>
                <UnityTech/>
                <RabbitMqTech/>
                <AspDotNetTech/>
                <MsSqlTech/>
                <AzureTech/>
            </TechStack>
        </>
    );
}