import {useState} from "react";
import type {Section} from "../../../types/sections.ts";
import ProjectSection from "./projects-section.tsx";
import projects from "../../../data/projects.json";
import WorkExperience from "./wex-section.tsx";
import workExp from "../../../data/work-experience.json";
import {MainButtons} from "./main-buttons.tsx";

export function MainSection() {
    const [currentSection, setCurrentSection] = useState<Section>("WorkExp");

    return <>
        <MainButtons currentSection={currentSection} setCurrentSection={setCurrentSection} />

        {currentSection == "Projects" && <ProjectSection projects={projects}/>}
        {currentSection == "WorkExp" && <WorkExperience workExp={workExp}/>}
    </>;
}