import type {Project} from "@/types/project";
import Tags from "./tags";
import ProjectViewButton from "./project-view-button";

export default function ProjectBlock({project}: { project: Project }) {

    return <article

        className="fade-up-on-view rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-800 flex flex-col justify-between"
    >
        <div>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{project.title}</h3>
            </div>

            <p className="text-gray-300 mt-3 text-sm">{project.description}</p>

            <Tags tags={project.tags}/>
        </div>

        <ProjectViewButton id={project.id}/>

    </article>
}