import './Heading.css';
import {useFitText} from "../utilities/useFitText.js";

function Heading({ id, header, subtitle, level: Level = 'h1' }) {
    const ref = useFitText();
    return (
        <div className="section-heading">
            <Level ref={ref} className="section-header" id={id}>{header}</Level>
            <p className="section-subtitle">{subtitle}</p>
        </div>
    );
}

export function H1Heading(props) {
    return <Heading {...props} level="h1" />;
}

export function H2Heading(props) {
    return <Heading {...props} level="h2" />;
}
