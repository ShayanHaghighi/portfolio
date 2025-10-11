import type {WorkExp} from "../../../../types/workExp.ts";
import {WexTitle} from "./wex-title.tsx";
import {DateRange} from "./date-range.tsx";

type WexHeaderParams = { workExp: WorkExp, startDate: string, endDate: string };

export function WexHeader({workExp,startDate,endDate}: WexHeaderParams) {
    return <div className="flex md:flex-row flex-col items-start md:items-center justify-between">
        <WexTitle workExp={workExp}/>

        <DateRange startDate={startDate} endDate={endDate}/>
    </div>;
}