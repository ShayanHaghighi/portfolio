export default function TimelineChunk() {
    return <div className="flex flex-col items-center h-auto translate-y-10">
        <div className="size-4 rounded-full -m-0 bg-timeline-blob"></div>
        <div className="w-0 h-full border-2 border-l-0 border-dashed border-timeline-dash"></div>
    </div>;
}
