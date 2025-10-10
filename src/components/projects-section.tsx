import type {Project} from "../types/project.ts";
import {motion} from "framer-motion";

export default function ProjectSection({projects}:{projects:Project[]}){
    return (
    <section id="projects" className="mt-16">
        <h2 className="text-2xl font-bold">Selected projects</h2>
        <p className="text-gray-400 mt-2 max-w-2xl">
            A short selection of projects I’ve worked on
        </p>

        <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    key={proj.id}
                    whileHover={{y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.5)"}}
                    className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-800 "
                >
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{proj.title}</h3>
                        <div className="text-xs text-gray-400">{proj.tags[0]}</div>
                    </div>

                    <p className="text-gray-300 mt-3 text-sm">{proj.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {proj.tags.map((t) => (
                            <span key={t}
                                  className="text-xs px-2 py-1 rounded-full bg-gray-800 border border-gray-700">
                      {t}
                    </span>
                        ))}
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                        {proj.repo ? (
                            <a href={proj.repo} className="text-sm underline">
                                Repo
                            </a>
                        ) : null}

                        {proj.demo ? (
                            <a href={proj.demo} className="text-sm underline">
                                Demo
                            </a>
                        ) : null}

                        <button
                            onClick={() => alert(`Open details for ${proj.title} (replace with router/modal)`)}
                            className="ml-auto inline-block text-sm px-3 py-1 rounded-md border border-gray-700"
                        >
                            Details
                        </button>
                    </div>
                </motion.article>
            ))}
        </motion.div>
    </section>
    )
}