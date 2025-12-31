import type { Project } from "@/types/project";
import Tags from "../tags";
import ProjectViewButton from "./project-view-button";

export default function ProjectBlock({ project }: { project: Project }) {

    return <article

        className="fade-up-on-view rounded-lg bg-gradient-to-br to-block-bg-2 from-block-bg-1 p-6 border border-transparent hover:border-block-border flex flex-col justify-between"
    >
        <div>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{project.title}</h3>
            </div>

            <p className="text-text-tertiary mt-3 text-sm">{project.description}</p>

            <div className="mt-4"><Tags tags={project.tags} /></div>
        </div>

        <ProjectViewButton id={project.id} />

    </article>
}
