import { IoDocumentText } from "react-icons/io5";

export function CvButton() {
    return <a
        href="/CV.pdf"
        className="py-2 h-10 rounded-full px-6 hover:brightness-75 bg-gradient-to-r from-button-cv-bg-1 to-button-cv-bg-2 text-text-inverse font-medium shadow-sm flex flex-row items-center justify-center gap-2"
    >
        <IoDocumentText />
        <span className=" font-semibold">CV</span>
    </a>;
}
