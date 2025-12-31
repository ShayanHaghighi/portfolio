import type { Project } from "@/types/project";
import ProjectBlock from "./project-block";
import BgText from "@/components/bg-text";

export default function ProjectSection({ projects }: { projects: Project[] }) {
    return (
        <section id="projects" className="mt-2">

            <h2 className="text-4xl font-bold section-header-1">
                Key projects
            </h2>

            <BgText>
                A short selection of projects I’ve worked on
            </BgText>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectBlock key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}
