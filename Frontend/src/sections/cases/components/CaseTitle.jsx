import './CaseTitle.css'
import { useFitText } from "../../../useFitText.js";

export default function CaseTitle({title}) {
    const ref = useFitText();
    return (<span ref={ref} className="case-title">{title}</span>);
}