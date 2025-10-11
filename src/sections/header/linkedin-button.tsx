import {FaLinkedin} from "react-icons/fa";
import {TfiNewWindow} from "react-icons/tfi";

export default function LinkedinButton() {
    return (
            <a
                href="https://www.linkedin.com/in/shayan-haghighi-a0030a229"
                target="_blank"
                className="flex-1 flex flex-row items-center px-2 justify-center gap-2 py-2 h-10 bg-[#0a66c2] text-white rounded hover:bg-gray-900 transition"
            >
                <FaLinkedin className="size-5"/>
                <span className="font-semibold">LinkedIn</span>
                <TfiNewWindow className="hidden sm:inline-block size-4 -translate-y-0.5"/>
            </a>
    )
}