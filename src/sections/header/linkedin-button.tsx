import {FaLinkedin} from "react-icons/fa";

export default function LinkedinButton() {
    return (
            <a
                href="https://www.linkedin.com/in/shayan-haghighi-a0030a229"
                target="_blank"
                className="flex-1 flex flex-row items-center justify-center gap-2 px-2 py-2 h-10 bg-[#0a66c2] text-white rounded hover:brightness-60 transition"
            >
                <FaLinkedin className="size-5"/>
                <span className="font-semibold">LinkedIn</span>
            </a>
    )
}