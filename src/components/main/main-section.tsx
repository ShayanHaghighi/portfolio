import type {Section} from "@/types/sections";
import ProjectSection from "./projects/projects-section";
import WorkExperience from "./wex/wex-section";
import MainButtons from "./main-buttons";
import {WorkExp} from "@/types/workExp";
import {Project} from "@/types/project";
import FadeUpObserver from "@/components/fade/FadeUpObserver";


export default function MainSection({projects,workExp,view}: {projects: Project[],workExp:WorkExp[],view:string|string[]|undefined}) {

    const section:Section = view === "projects" ? "projects" : "workexp"

    return <>
        <MainButtons currentSection={section} />
        <FadeUpObserver section={section}/>


        {section == "projects" && <ProjectSection projects={projects}/>}
        {section == "workexp" && <WorkExperience workExp={workExp}/>}
    </>;
}