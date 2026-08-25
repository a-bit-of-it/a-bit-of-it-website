import {LegoIcon, SuperMarioIcon} from "../Icons.jsx";
import {BluetoothTech, UnityTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";

export default function LEGOSuperMarioCase() {
    return (
        <Case
            icons={[LegoIcon, SuperMarioIcon]}
            from="2022-10-01"
            to="2023-10-01"
            title="LEGO Super Mario Companion App"
            summary=""
            tech="TODO"
            techStack={[UnityTech, BluetoothTech]}
        />
    );
}