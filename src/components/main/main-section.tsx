import {useState} from "react";
import type {Section} from "@/types/sections";
import ProjectSection from "./projects/projects-section";
import WorkExperience from "./wex/wex-section";
import MainButtons from "./main-buttons";
import {WorkExp} from "@/types/workExp";
import {Project} from "@/types/project";



export default function MainSection({projects,workExp}: {projects: Project[],workExp:WorkExp[]}) {

    const [currentSection, setCurrentSection] = useState<Section>("WorkExp");

    return <>
        <MainButtons currentSection={currentSection} setCurrentSection={setCurrentSection}/>

        {currentSection == "Projects" && <ProjectSection projects={projects}/>}
        {currentSection == "WorkExp" && <WorkExperience workExp={workExp}/>}
    </>;
}