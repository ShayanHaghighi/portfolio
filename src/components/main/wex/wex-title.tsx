import type { WorkExp } from "@/types/workExp.ts";

export default function WexTitle({ workExp }: { workExp: WorkExp }) {
    return <div className="flex flex-row items-center justify-between ">
        <div className="font-semibold text-2xl w-fit text-text-primary">{workExp.title}</div>
        {workExp.employer && <>
            <div className="text-xl text-center text-text-tertiary  mx-4">•</div>
            <div className="text-md text-left text-wex-company ">{workExp.employer}</div>
        </>}
    </div>;
}
