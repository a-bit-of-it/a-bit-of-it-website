import {ChemoMetecIcon} from "../Icons.jsx";
import Case from "./components/Case.jsx";
import {AiTech, PostgreSqlTech, PythonTech, ReactTech} from "./components/TechStack.jsx";

export default function ChemoMetecCase() {
    return (
        <Case
            icons={[ChemoMetecIcon]}
            from="2026-07-01"
            to="Present"
            title="Turning medical news into sales"
            images={["/CaseTEMP.jpg", "/CaseTEMP.jpg"]}
            summary={summary}
            tech={tech}
            techStack={[ReactTech, PythonTech, PostgreSqlTech, AiTech]}
        />
    );
}

const summary = "ChemoMetec is a leading manufacturer of automated cell analysis equipment. In their industry, something new is happening each day and it is impossible to stay current. " +
    "ChemoMetec needed an automated AI-system for collecting news and classifying their sales potentials. They no longer have to manually read news, classify them and distribute them within the team - it happens automatically. " +
    "The risk of missing potential new customers or sales is reduced. ";

const tech = "A frontend written in React, a backend written in Python, connecting to a PostgreSQL database all hosted on a on-prem server.";
