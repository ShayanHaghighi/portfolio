import {MdDownload} from "react-icons/md";

export function CvButton() {
    return <a
        href="/CV.pdf"
        className="flex-1 py-2 h-10 rounded-md px-2 bg-white hover:brightness-75 text-gray-900 font-medium shadow-sm flex flex-row items-center justify-center gap-2"
        download
    >
        <span className="font-semibold">CV</span>
        <MdDownload className="size-4"/>
    </a>;
}