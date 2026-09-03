import './Case.css'
import IconRow from "./IconRow.jsx";
import CaseTitle from "./CaseTitle.jsx";
import ForTheNerds from "./ForTheNerds.jsx";
import {TechStack} from "./TechStack.jsx";
import CaseSummary from "./CaseSummary.jsx";
import CaseImages from "./CaseImages.jsx";

export default function Case({ icons, title, tech, techStack, summary, images }) {
    return (
        <article className="case">
            <div className="case-header">
                <CaseTitle title={title} />
                <IconRow>
                    {icons.map((Icon, i) => (
                        <Icon key={i} />
                    ))}
                </IconRow>
            </div>
            <div className="case-info">
                <CaseSummary text={summary} />
                <CaseImages images={images} />
            </div>
            <ForTheNerds text={tech}>
                <TechStack>
                    {techStack.map((Tech, i) => (
                        <Tech key={i} />
                    ))}
                </TechStack>
            </ForTheNerds>
        </article>
    );
}
