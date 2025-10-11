import type {WorkExp} from "../../../../types/workExp.ts";

export function WexTitle({workExp}: { workExp: WorkExp }) {
    return <div className="flex flex-row items-center justify-between ">
        <div className="font-semibold text-lg w-fit">{workExp.title}</div>
        {workExp.employer && <>
            <div className="text-xl text-center text-gray-400 mx-4">•</div>
            <div className="text-xs text-left text-gray-400">{workExp.employer}</div>
        </>}
    </div>;
}