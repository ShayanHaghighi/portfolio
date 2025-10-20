import type {WorkExp} from "@/types/workExp.ts";

export default function WexTitle({workExp}: { workExp: WorkExp }) {
    console.log(workExp)
    return <div className="flex flex-row items-center justify-between ">
        <div className="font-semibold text-2xl w-fit">{workExp.title}</div>
        {workExp.employer && <>
            <div className="text-xl text-center text-gray-400 mx-4">•</div>
            <div className="text-md text-left text-gray-400">{workExp.employer}</div>
        </>}
    </div>;
}