import IconRow from "./IconRow.jsx";
import FromToRow from "./FromToRow.jsx";
import CaseTitle from "./CaseTitle.jsx";
import ForTheNerds from "./ForTheNerds.jsx";
import {TechStack} from "./TechStack.jsx";

export default function Case({ icons, from, to, title, tech, techStack }) {
    return (
        <>
            <IconRow>
                {icons.map((Icon, i) => (
                    <Icon key={i} />
                ))}
            </IconRow>
            <FromToRow from={from} to={to} />
            <CaseTitle title={title} />
            <ForTheNerds text={tech}>
                <TechStack>
                    {techStack.map((Tech, i) => (
                        <Tech key={i} />
                    ))}
                </TechStack>
            </ForTheNerds>
        </>
    );
}