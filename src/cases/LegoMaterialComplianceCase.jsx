import {LegoIcon} from "../Icons.jsx";
import {AspDotNetTech, AzureTech, MsSqlTech, ReactTech, TechStack} from "./TechStack.jsx";
import CaseTitle from "./CaseTitle.jsx";
import IconRow from "./IconRow.jsx";
import ForTheNerds from "./ForTheNerds.jsx";

export default function LegoMaterialComplianceCase (){
    return (
        <>
            <IconRow>
                <LegoIcon/>
            </IconRow>
            <CaseTitle title="Ensuring the highest of safety standards for the beloved brick"/>
            <ForTheNerds text="TODO">
                <TechStack>
                    <ReactTech/>
                    <AspDotNetTech/>
                    <MsSqlTech/>
                    <AzureTech/>
                </TechStack>
            </ForTheNerds>
        </>
    );
}