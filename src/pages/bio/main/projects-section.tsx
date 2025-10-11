import type {Project} from "../../../types/project.ts";
import {motion} from "framer-motion";

import {FaArrowAltCircleRight} from "react-icons/fa";
import {Link} from "react-router";

export default function ProjectSection({projects}: { projects: Project[] }) {
    return (
        <section id="projects" className="mt-2">
            <h2 className="text-2xl font-bold">Key projects</h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
                A short selection of projects I’ve worked on
            </p>

            <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj) => (
                    <motion.article
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                        viewport={{once: true, amount: 0.1}}
                        key={proj.id}
                        className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-800 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg">{proj.title}</h3>
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
                        </div>

                        <div className="mt-4 w-full">
                            <Link
                                to={`project/${proj.id}`}
                                className="w-full ml-auto mt-4 flex  text-lg text-center p-1 rounded-full gradient cursor-pointer"
                            >
                                <span
                                    className="flex gap-2 flex-row items-center justify-center  py-2 w-full rounded-full border-2 hover:border-transparent border-gray-600 bg-gray-800 hover:bg-white hover:text-black transition-bg duration-300">
                                    <span>View</span>
                                    <FaArrowAltCircleRight/>
                                </span>
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    )
}