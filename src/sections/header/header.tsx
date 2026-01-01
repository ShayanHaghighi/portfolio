import BgText from "@/components/bg-text";
import ContactButtons from "./contact-buttons";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header
            className=" max-w-6xl mx-auto px-6 py-3 sm:py-6 flex md:flex-row flex-col gap-4 md:items-center items-start justify-between border-b-2 border-canvas-secondary">

            <div className="flex items-center gap-3">
                <Link
                    className="w-10 h-10 rounded-lg catppuccin-rainbow flex items-center justify-center font-bold text-white cursor-pointer"
                    href="/"
                >
                    <Image src="/oogway-small.png" alt="logo" width={50} height={50} className="w-full h-full" />
                </Link>
                <div>
                    <div className="text-md text-text-primary font-semibold">Shayan Haghighi</div>
                    <BgText classname="text-xs">
                        Software Engineer — Full Stack · ML · Automated Testing
                        <br />
                        shayan.haghighi04@gmail.com</BgText>
                </div>
            </div>

            <ContactButtons />
        </header >
    )
}
