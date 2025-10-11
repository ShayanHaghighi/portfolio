import {TimelineChunk} from "./timeline-chunk.tsx";
import {motion} from "framer-motion";
import {WexHeader} from "./wex-header.tsx";
import {Tags} from "../projects/tags.tsx";
import type {WorkExp} from "../../../../types/workExp.ts";

type WexItemProps = { workExp: WorkExp, startDate: string, endDate: string };

export function WexItem({workExp, startDate, endDate}: WexItemProps) {
    return <article

        className="rounded-2xl"
    >
        <div className="flex flex-row justify-start gap-6">
            <TimelineChunk/>

            <motion.div className="flex-1 my-8" initial={{opacity: 0.0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                        viewport={{once: true, amount: 0.3}}
            >
                <WexHeader workExp={workExp} startDate={startDate} endDate={endDate}/>

                <p className="text-gray-300 mt-3 text-sm">{workExp.shortDescription}</p>

                <Tags tags={workExp.tags}/>

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
    </article>;
}