import type {Project} from "../../../../types/project.ts";
import {ProjectBlock} from "./project-block.tsx";

export default function ProjectSection({projects}: { projects: Project[] }) {
    return (
        <section id="projects" className="mt-2">

            <h2 className="text-2xl font-bold">
                Key projects
            </h2>

            <p className="text-gray-400 mt-2 max-w-2xl">
                A short selection of projects I’ve worked on
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectBlock key={project.id} project={project}/>
                ))}
            </div>

        </section>
    )
}