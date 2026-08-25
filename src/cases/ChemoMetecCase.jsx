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
            tech="TODO"
            techStack={[ReactTech, PythonTech, PostgreSqlTech, AiTech]}
        />
    );
}

const businessCaseText = "ChemoMetec is a leading manufacturer of automated cell analysis equipment. The bio(?) industry is advancing faster than we humans can reasonably keep up with. \n" +
    "                ChemoMetec needed an automated system for keeping tracking of the fast-moving news within the industry - news ChemoMetec uses to help sell their analysis equipment to prospective customers. \n" +
    "                AI agents could more quickly and reliably find great customers and help ChemoMetec sell their stuff.   ";


