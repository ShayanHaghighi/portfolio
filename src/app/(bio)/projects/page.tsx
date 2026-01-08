import type { Section } from "@/types/sections";
import FadeUpObserver from "@/components/fade/FadeUpObserver";
import MainButtons from "@/components/main/main-buttons";
import ProjectSection from "@/components/main/projects/projects-section";
import projects from "@/data/projects.json"


export default function MainSection() {

    const section: Section = "projects"

    return <>
        <MainButtons currentSection={section} />
        <FadeUpObserver section={section} />

        <ProjectSection projects={projects} />
    </>;
}
