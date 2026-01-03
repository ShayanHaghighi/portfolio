import BgText from "@/components/bg-text";
import Link from "next/link";
import Divider from "./divider";

export function Footer() {
    return <footer className="max-w-6xl w-screen mt-16 text-center text-sm border-t-2 pt-2 border-canvas-secondary" style={{
        // borderColor: "rgba(200,200,255, 0.1)",
    }}>
        <BgText classname="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center">
            <div>Built with Next.js + TypeScript</div>
            <Divider classname="hidden sm:inline-block" />
            <div>Source code at can be found <a className="underline"
                href="https://github.com/ShayanHaghighi/portfolio">here</a>
            </div>
            <Divider classname="hidden sm:inline-block" />
            <Link href="/licenses" className="underline">
                Licences
            </Link >
        </BgText>
    </footer >;
}
