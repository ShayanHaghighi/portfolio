import BgText from "@/components/bg-text";

export function Footer() {
    return <footer className="max-w-6xl w-screen mt-16 text-center text-sm pb-8 border-t-2 pt-2 border-canvas-secondary" style={{
        // borderColor: "rgba(200,200,255, 0.1)",
    }}>
        <BgText>
            <div>Built with Next.js + TypeScript</div>
            <div>Source code at can be found <a className="underline"
                href="https://github.com/ShayanHaghighi/portfolio">here</a>
            </div>
        </BgText>
    </footer>;
}
