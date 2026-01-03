
export default function Divider({ classname }: { classname?: string }) {
    return (
        <div className={`h-4 w-0 border-l-2 ${classname} border-text-tertiary`} />

    )
}
