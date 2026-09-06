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
            images={[{ src: "/LSMApp.jpg", alt: t('cases.lego-super-mario.images.app') }]}
            problem={t('cases.lego-super-mario.problem')}
            solution={t('cases.lego-super-mario.solution')}
            tech={t('cases.lego-super-mario.tech')}
            techStack={[UnityTech, BluetoothTech]}
        />
    );
}