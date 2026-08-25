import {ChemoMetecIcon} from "../Icons.jsx";
import TechStack, {AiTech, PostgreSqlTech, PythonTech, ReactTech} from "./TechStack.jsx";
import CaseSummary from "./CaseSummary.jsx";
import CaseTitle from "./CaseTitle.jsx";
import IconRow from "./IconRow.jsx";

export default function ChemoMetecCase (){
    const businessCaseText = "ChemoMetec is a leading manufacturer of automated cell analysis equipment. The bio(?) industry is advancing faster than we humans can reasonably keep up with. \n" +
        "                ChemoMetec needed an automated system for keeping tracking of the fast-moving news within the industry - news ChemoMetec uses to help sell their analysis equipment to prospective customers. \n" +
        "                AI agents could more quickly and reliably find great customers and help ChemoMetec sell their stuff.   ";
    return (
        <>
            <CaseTitle title="ChemoMetec"/>
            <IconRow>
                <ChemoMetecIcon/>
            </IconRow>
            <CaseSummary text={businessCaseText}/>
            <TechStack>
                <ReactTech/>
                <PythonTech/>
                <PostgreSqlTech/>
                <AiTech/>
            </TechStack>
            <span>
            </span>
        </>
    );
}