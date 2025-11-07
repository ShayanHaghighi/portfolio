export default function StrongText({children}: { children: React.ReactNode }) {
    return (
        <strong className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-pink-700 dark:from-indigo-400 dark:to-pink-400">
            {children}
        </strong>
    )
}