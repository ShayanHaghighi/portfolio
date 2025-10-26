import type {Project} from "@/types/project";
import Tags from "../tags";
import ProjectViewButton from "./project-view-button";

export default function ProjectBlock({project}: { project: Project }) {

    return <article

        className="fade-up-on-view rounded-2xl bg-gradient-to-br dark:from-gray-900 dark:to-gray-800   from-indigo-200 to-purple-100 p-6 border border-gray-800 flex flex-col justify-between"
    >
        <div>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{project.title}</h3>
            </div>

            <p className="dark:text-gray-300 text-gray-500 mt-3 text-sm">{project.description}</p>

            <div className="mt-4"><Tags tags={project.tags}/></div>
        </div>

        <ProjectViewButton id={project.id}/>

    </article>
}