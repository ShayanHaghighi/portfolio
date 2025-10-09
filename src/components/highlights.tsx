import type {Project} from "../types/project.ts";
import {motion} from "framer-motion";

export default function Highlights({projects}:{projects:Project[]}){
    return (

        <motion.div
            initial={{scale: 0.98, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 0.6}}
            className="relative"
        >
            <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-2xl">
                <div
                    className="w-full h-64 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
                    Project Highlights
                </div>



    <div className="mt-4 grid grid-cols-1 gap-3">
        {projects.slice(0, 3).map((p) => (
            <div key={p.id} className="p-3 bg-gray-900 rounded-md border border-gray-800">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="font-semibold">{p.title}</div>
                        <div className="text-xs text-gray-400">{p.tags.join(" • ")}</div>
                    </div>
                    <div className="text-xs text-gray-500">{p.highlights?.[0] ?? ""}</div>
                </div>
            </div>
        ))}
    </div>
            </div>
        </motion.div>)
}