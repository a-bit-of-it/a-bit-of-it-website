import {LegoIcon, SuperMarioIcon} from "../Icons.jsx";
import {BluetoothTech, TechStack, UnityTech} from "./TechStack.jsx";
import IconRow from "./IconRow.jsx";
import CaseTitle from "./CaseTitle.jsx";
import ForTheNerds from "./ForTheNerds.jsx";

export default function LEGOSuperMarioCase (){
    return (
        <>
            <IconRow>
                <LegoIcon/>
                <SuperMarioIcon/>
            </IconRow>
            <CaseTitle title="Learning through play with the LEGO Super Mario Companion App"/>
            <ForTheNerds text="TODO">
                <TechStack>
                    <UnityTech/>
                    <BluetoothTech/>
                </TechStack>
            </ForTheNerds>
        </>
    );
}