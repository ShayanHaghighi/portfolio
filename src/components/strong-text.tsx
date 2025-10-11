export default function StrongText({children}: { children: string }) {
    return (
        <strong className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
            {children}
        </strong>
    )
}