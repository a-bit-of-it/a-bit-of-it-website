import './CaseTitle.css'
import {useFitText} from "../../../../../utilities/useFitText.js";

export default function CaseTitle({title}) {
    const ref = useFitText();
    return (<h3 ref={ref} className="case-title">{title}</h3>);
}