import { MdDownload } from "react-icons/md";

export function CvButton() {
    return <a
        href="/CV.pdf"
        className="py-2 h-10 rounded-full px-6 hover:brightness-75 bg-gradient-to-r from-button-cv-bg-1 to-button-cv-bg-2 text-text-inverse font-medium shadow-sm flex flex-row items-center justify-center gap-2"
        download
    >
        <MdDownload className="size-4" />
        <span className=" font-semibold">CV</span>
    </a>;
}
