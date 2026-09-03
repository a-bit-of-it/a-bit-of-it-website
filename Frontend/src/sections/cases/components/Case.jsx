import './Case.css'
import IconRow from "./IconRow.jsx";
import CaseTitle from "./CaseTitle.jsx";
import ForTheNerds from "./ForTheNerds.jsx";
import {TechStack} from "./TechStack.jsx";
import CaseProblem from "./CaseProblem.jsx";
import CaseSolution from "./CaseSolution.jsx";
import CaseImages from "./CaseImages.jsx";

export default function Case({ icons, title, tech, techStack, problem, solution, images, backgroundImage }) {
    return (
        <article
            className="case"
            // style={backgroundImage ? { '--case-bg-image': `url(${backgroundImage})` } : undefined}
        >
            <div className="case-header">
                <CaseTitle title={title} />
                <IconRow>
                    {icons.map((Icon, i) => (
                        <Icon key={i} />
                    ))}
                </IconRow>
            </div>
            <div className="case-info">
                <CaseProblem text={problem} />
                <CaseSolution text={solution} />
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
