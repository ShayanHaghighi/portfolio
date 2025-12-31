import { FaLinkedin } from "react-icons/fa";

export default function LinkedinButton() {
    return (
        <a
            href="https://www.linkedin.com/in/shayan-haghighi-a0030a229"
            target="_blank"
            className="flex flex-row items-center justify-center gap-2 px-6 py-2 h-10 bg-gradient-to-r from-button-linkedin-bg-1 to-button-linkedin-bg-2 text-text-inverse rounded-full hover:brightness-60 transition"
        >
            <FaLinkedin className="size-5" />
            <span className="font-semibold">LinkedIn</span>
        </a>
    )
}
