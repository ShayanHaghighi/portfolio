import {MdDownload} from "react-icons/md";

export function CvButton() {
    return <a
        href="/CV.pdf"
        className="flex-1 py-2 h-10 rounded-md px-2 dark:bg-white bg-black hover:brightness-75 dark:text-gray-900 text-gray-200 font-medium shadow-sm flex flex-row items-center justify-center gap-2"
        download
    >
        <span className="font-semibold">CV</span>
        <MdDownload className="size-4"/>
    </a>;
}