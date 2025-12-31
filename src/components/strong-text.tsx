export default function StrongText({ classname, children }: { classname: string | undefined, children: React.ReactNode }) {
    return (
        <strong className={`bg-clip-text ${classname} text-transparent bg-gradient-to-r from-strong-1 to-strong-2`}>
            {children}
        </strong>
    )
}
