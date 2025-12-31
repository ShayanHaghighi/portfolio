export default function BgText({ classname, children }: { classname?: string | undefined, children: React.ReactNode }) {
    return (
        <span className={` ${classname} block text-text-secondary brightness-75`}>
            {children}
        </span>
    )
}
