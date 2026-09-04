import { useFitText } from "../useFitText.js";

export default function SectionHeading({ id, header, subtitle }) {
    const ref = useFitText();
    return (
        <div className="section-heading">
            <h1 ref={ref} className="section-header" id={id}>{header}</h1>
            <p className="section-subtitle">{subtitle}</p>
        </div>
    );
}
