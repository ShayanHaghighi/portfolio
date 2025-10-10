import {motion} from "framer-motion";
import type {WorkExp} from "../types/workExp.ts";
import {useEffect, useState} from "react";

export default function WorkExperience({workExp}: { workExp: WorkExp[] }) {
    const [sortedDates, setSortedDates] = useState<WorkExp[]>([])

    useEffect(() => {
        const sorted = workExp.sort((a, b) => {
            if (a.endDate.toLowerCase() === "present") {
                return -1
            }
            return new Date(a.endDate) > new Date(b.endDate) ? -1 : 1;
        })
        setSortedDates(sorted)
    }, [workExp])

    const dateFormat: Intl.DateTimeFormatOptions = {year: "numeric", month: "short"};

    function isValidDate(d: Date) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return !isNaN(d);
    }

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        if (isValidDate(date)) {
            return date.toLocaleDateString("en-US", dateFormat)

        }
        return dateString

    }

    return (
        <section id="projects" className="mt-16">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
                A short selection of projects I’ve worked on
            </p>

            <motion.div className="mt-6 flex flex-col flex-nowrap gap-0 px-[10%]">
                {sortedDates.map((proj) => (
                    <article
                        key={proj.id}
                        className="rounded-2xl"
                    >
                        <div className="flex flex-row justify-start gap-6">
                            <div className="flex flex-col items-center h-auto translate-y-2">
                                <div className="size-4 rounded-full border-2 -m-0 border-gray-500"></div>
                                <div className="w-0.5 h-full bg-gray-500"></div>
                            </div>
                            <motion.div className="flex-1 my-8" initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6, ease: "easeOut"}}
                                        viewport={{once: true, amount: 0.3}}
                                        key={proj.id}>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-row items-center"><h3 className="font-semibold text-lg">{proj.title}</h3>
                                        {proj.employer && <>
                                            <div className="text-xl text-gray-400 mx-4">•</div>
                                        <div className="text-xs text-gray-400">{proj.employer}</div></>}
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <div
                                            className="text-xs text-gray-400 font-semibold">{formatDate(proj.startDate)}</div>
                                        <div className="text-xs text-gray-400 mx-1">-</div>
                                        <div className="text-xs text-gray-400 font-semibold">{formatDate(proj.endDate)}</div>
                                    </div>
                                </div>

                                <p className="text-gray-300 mt-3 text-sm">{proj.shortDescription}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {proj.tags.map((t) => (
                                        <span key={t}
                                              className="text-xs px-2 py-1 rounded-full bg-gray-800 border border-gray-700">
                      {t}
                    </span>
                                    ))}
                                </div>
                                {/*TODO include later*/}
                                {/*<div className="mt-4 flex items-center gap-3">*/}

                                {/*    <button*/}
                                {/*        onClick={() => alert(`Open details for ${proj.title} (replace with router/modal)`)}*/}
                                {/*        className="ml-auto inline-block text-sm px-3 py-1 rounded-md border border-gray-700"*/}
                                {/*    >*/}
                                {/*        Details*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </motion.div>
                        </div>
                    </article>
                ))}
            </motion.div>
        </section>
    )
}