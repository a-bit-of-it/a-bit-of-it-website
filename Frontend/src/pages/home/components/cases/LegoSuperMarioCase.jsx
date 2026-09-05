import {BluetoothTech, UnityTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";
import {LegoIcon, SuperMarioIcon} from "../../../../Icons.jsx";
import {useTranslation} from "react-i18next";

export default function LEGOSuperMarioCase() {
    const { t } = useTranslation();

    return (
        <Case
            icons={[LegoIcon, SuperMarioIcon]}
            title="LEGO Super Mario Companion App"
            images={["/LSMApp.jpg"]}
            problem={t('cases.lego-super-mario.problem')}
            solution={t('cases.lego-super-mario.solution')}
            tech={'cases.lego-super-mario.tech'}
            techStack={[UnityTech, BluetoothTech]}
        />
    );
}

const problem = "LEGO has a philosophy: Learning through play. " +
    "In a collaboration between LEGO and Nintendo, the idea of using bluetooth-connected Nintendo-themed, LEGO-figures was conceived. " +
    "Physical play had to be at the center of the experience, so they wanted an app to compliment it.";

const solution = "Using their phones or tablets, children can connect their figures to the app, view building instructions, see tutorial videos, and interact with other users in the community. ";

const tech = "The companion app is built in the Unity game engine and interacted with a rich set of features, that LEGO had already built for other apps";