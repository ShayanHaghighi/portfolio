type DateRangeParams = { startDate: string, endDate: string };

export default function DateRange({ startDate, endDate }: DateRangeParams) {
    return <div className="flex flex-row md:mt-0 mt-1 items-center">
        <div
            className="text-md text-wex-date italic">{startDate}</div>
        <div className="text-md text-wex-date mx-1">-</div>
        <div
            className="text-md text-wex-date italic">{endDate}</div>
    </div>;
}
