import TimelineChunk from "./timeline-chunk";
import WexHeader from "./wex-header";
import Tags from "../tags";
import type { WorkExp } from "@/types/workExp";

type WexItemProps = { workExp: WorkExp, startDate: string, endDate: string };

export default function WexItem({ workExp, startDate, endDate }: WexItemProps) {


    return <article

    // className="bg-transparent first:rounded-t-xl px-8"
    >
        <div className="flex flex-row justify-start gap-6 ">
            <TimelineChunk />

            <div className="flex-1  fade-up-on-view flex flex-col justify-center items-start h-full py-8">
                <WexHeader workExp={workExp} startDate={startDate} endDate={endDate} />

                <p className="text-text-secondary mt-3 text-md">{workExp.shortDescription}</p>

                <div className="mt-4"><Tags tags={workExp.tags} /></div>

            </div>
        </div>
    </article>
        ;
}
