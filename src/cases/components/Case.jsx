import './Case.css'
import IconRow from "./IconRow.jsx";
import FromToRow from "./FromToRow.jsx";
import CaseTitle from "./CaseTitle.jsx";
import ForTheNerds from "./ForTheNerds.jsx";
import {TechStack} from "./TechStack.jsx";
import CaseSummary from "./CaseSummary.jsx";

export default function Case({ icons, from, to, title, tech, techStack, summary }) {
    return (
        <>
            <IconRow>
                {icons.map((Icon, i) => (
                    <Icon key={i} />
                ))}
            </IconRow>
            <div className="case-info">
                <CaseTitle title={title} />
                <FromToRow from={from} to={to} />
                {summary && <CaseSummary text={summary} />}
            <ForTheNerds text={tech}>
                <TechStack>
                    {techStack.map((Tech, i) => (
                        <Tech key={i} />
                    ))}
                </TechStack>
            </ForTheNerds>
            </div>

        </>
    );
}