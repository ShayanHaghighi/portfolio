export function Footer() {
    return <footer className="max-w-6xl w-screen mt-16 text-center text-gray-500 text-sm pb-8 border-t-2 pt-2" style={{
        borderColor: "rgba(200,200,255, 0.1)",
    }}>

        <div>Built with React + TypeScript • Designed for recruiters and interviewers</div>
        <div>Source code at can be found <a className="underline"
                                            href="https://github.com/ShayanHaghighi/portfolio">here</a>
        </div>
    </footer>;
}