import TimelineChunk from "./timeline-chunk";
import {motion} from "framer-motion";
import WexHeader from "./wex-header";
import Tags from "../projects/tags";
import type {WorkExp} from "@/types/workExp";

type WexItemProps = { workExp: WorkExp, startDate: string, endDate: string };

export default function WexItem({workExp, startDate, endDate}: WexItemProps) {
    console.log(workExp, startDate, endDate);
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

                <p className="text-gray-300 mt-3 text-md">{workExp.shortDescription}</p>

                <Tags tags={workExp.tags}/>

            </motion.div>
        </div>
    </article>;
}