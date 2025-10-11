import type {Project} from "../../../../types/project.ts";
import {motion} from "framer-motion";
import {Tags} from "./tags.tsx";
import {ProjectViewButton} from "./project-view-button.tsx";

export function ProjectBlock({project}: { project: Project }) {
    return <motion.article
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, ease: "easeOut"}}
        viewport={{once: true, amount: 0.1}}

        className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-800 flex flex-col justify-between"
    >
        <div>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{project.title}</h3>
            </div>

            <p className="text-gray-300 mt-3 text-sm">{project.description}</p>

            <Tags tags={project.tags}/>
        </div>

        <ProjectViewButton id={project.id}/>

    </motion.article>;
}