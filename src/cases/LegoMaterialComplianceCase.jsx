import {LegoIcon} from "../Icons.jsx";
import TechStack, {AspDotNetTech, AzureTech, MsSqlTech, ReactTech} from "./TechStack.jsx";
import CaseTitle from "./CaseTitle.jsx";
import CaseSummary from "./CaseSummary.jsx";
import IconRow from "./IconRow.jsx";

export default function LegoMaterialComplianceCase (){
    const businessCaseText = "Ensuring the highest standards for the beloved brick";
    return (
        <>
            <CaseTitle title="Lego Material & Compliance"/>
            <IconRow>
                <LegoIcon/>
            </IconRow>
            <CaseSummary text={businessCaseText}/>
            <TechStack>
                <ReactTech/>
                <AspDotNetTech/>
                <MsSqlTech/>
                <AzureTech/>
            </TechStack>
        </>
    );
}