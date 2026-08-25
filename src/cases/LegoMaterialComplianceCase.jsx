import {LegoIcon} from "../Icons.jsx";
import {AspDotNetTech, AzureTech, MsSqlTech, ReactTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";

export default function LegoMaterialComplianceCase() {
    return (
        <Case
            icons={[LegoIcon]}
            from="2025-07-01"
            to="2026-04-01"
            title="Safety standards for the beloved brick"
            summary=""
            tech="TODO"
            techStack={[ReactTech, AspDotNetTech, MsSqlTech, AzureTech]}
        />
    );
}