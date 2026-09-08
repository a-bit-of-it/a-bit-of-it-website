import './Heading.css';
import {useFitText} from "../utilities/useFitText.js";

function Heading({ id, header, subtitle, level: Level = 'h1' }) {
    const ref = useFitText();
    return (
        <div className="heading">
            <Level ref={ref} className="heading-title" id={id}>{header}</Level>
            <p className="heading-subtitle">{subtitle}</p>
        </div>
    );
}

export function H1Heading({id, header, subtitle}) {
    return <Heading id={id} header={header} subtitle={subtitle} level="h1" />;
}

export function H2Heading({id, header, subtitle}) {
    return <Heading id={id} header={header} subtitle={subtitle} level="h2" />;
}
