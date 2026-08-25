import {LegoIcon, SuperMarioIcon} from "../Icons.jsx";
import TechStack, {BluetoothTech, UnityTech} from "./TechStack.jsx";
import IconRow from "./IconRow.jsx";
import CaseTitle from "./CaseTitle.jsx";
import CaseSummary from "./CaseSummary.jsx";

export default function LEGOSuperMarioCase (){
    const businessCaseText = "Aiding physical play with a companion app";
    return (
        <>
            <CaseTitle title="LEGO Super Mario"/>
            <IconRow>
                <LegoIcon/>
                <SuperMarioIcon/>
            </IconRow>
            <CaseSummary text={businessCaseText}/>
            <TechStack>
                <UnityTech/>
                <BluetoothTech/>
            </TechStack>
            <h3></h3>
        </>
    );
}