import './CaseTitle.css'
import {useFitText} from "../../../../../utilities/useFitText.js";

export default function CaseTitle({title}) {
    const ref = useFitText();
    return (<span ref={ref} className="case-title">{title}</span>);
}