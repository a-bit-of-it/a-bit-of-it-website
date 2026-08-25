import {LegoIcon} from "../Icons.jsx";
import {AspDotNetTech, AzureTech, MsSqlTech, ReactTech} from "./components/TechStack.jsx";
import Case from "./components/Case.jsx";

export default function LegoMaterialComplianceCase() {
    return (
        <Case
            icons={[LegoIcon]}
            from="2025-07-01"
            to="2026-04-01"
            title="Meeting the highest safety standards"
            summary={summary}
            tech={tech}
            techStack={[ReactTech, AspDotNetTech, MsSqlTech, AzureTech]}
        />
    );
}

const summary = "At LEGO, each brick is put through a comprehensive test-suite before reaching consumers. " +
    "When a new brick is designed, or it changes color or material, the brick is retested to ensure safety. " +
    "LEGO needed a shared testing platform to keep track of all this data, including testers, reviews and report generation for historical and auditorial reasons ";

const tech = "LEGO already had a proposal for the UI design and had begun the implementation of the system. " +
    "The solution took shape as an internal tool with the frontend written in React, communicating with a ASP.NET backend and MSSQL database. Hosted in Azure. ";