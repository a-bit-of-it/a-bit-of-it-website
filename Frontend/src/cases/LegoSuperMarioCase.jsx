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
            images={["/CaseTEMP.jpg", "/CaseTEMP.jpg"]}
            summary={summary}
            tech={tech}
            techStack={[UnityTech, BluetoothTech]}
        />
    );
}

const summary = "LEGO has a philosophy: Learning through play. " +
    "In a collaboration between LEGO and Nintendo, the idea of using bluetooth-connected Nintendo-themed, LEGO-figures was conceived. " +
    "Physical play had to be at the center of the experience, so they wanted an app to compliment it. " +
    "Using their phones or tablets, children can connect their figures to the app, view building instructions, see tutorial videos, and interact with other users in the community. ";

const tech = "The companion app is built in the Unity game engine and interacted with a rich set of features, that LEGO had already built for other apps";