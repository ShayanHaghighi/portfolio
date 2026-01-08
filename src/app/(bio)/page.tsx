import type { Section } from "@/types/sections";
import FadeUpObserver from "@/components/fade/FadeUpObserver";
import MainButtons from "@/components/main/main-buttons";
import WorkExperience from "@/components/main/wex/wex-section";
import workExp from "@/data/work-experience.json"

export default function MainSection() {

    const section: Section = "workexp"

    return <>
        <MainButtons currentSection={section} />
        <FadeUpObserver section={section} />

        <WorkExperience workExp={workExp} />
    </>;
}
