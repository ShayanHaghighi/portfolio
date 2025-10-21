import TimelineChunk from "./timeline-chunk";
import WexHeader from "./wex-header";
import Tags from "../projects/tags";
import type {WorkExp} from "@/types/workExp";

type WexItemProps = { workExp: WorkExp, startDate: string, endDate: string };

export default function WexItem({workExp, startDate, endDate}: WexItemProps) {


    return <article

            className="rounded-2xl"
        >
            <div className="flex flex-row justify-start gap-6">
                <TimelineChunk/>

                <div className="flex-1 my-8 fade-up-on-view">
                    <WexHeader workExp={workExp} startDate={startDate} endDate={endDate}/>

                    <p className="text-gray-300 mt-3 text-md">{workExp.shortDescription}</p>

                    <Tags tags={workExp.tags}/>

                </div>
            </div>
        </article>
    ;
}