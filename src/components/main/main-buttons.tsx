import Link from "next/link";
import {Section} from "@/types/sections";


export default function MainButtons({currentSection,}: { currentSection: Section }) {
    return <div
        className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 my-6 text-[#646cff]">
        <Link
            className={`w-full flex items-center justify-center gap-2 cursor-pointer py-4 hover:shadow-none hover:bg-gray-700 hover:text-black  transition-all duration-200 border border-gray-700 rounded-full text-sm ${currentSection == "workexp" ? "bg-gray-800" : "bg-transparent"}`}
            href="/?view=workexp"
        scroll={false}>
                                <span
                                    className=" bg-clip-text text-transparent transition-all duration-200 bg-gradient-to-r from-indigo-400 to-pink-400 text-lg font-bold">{"WorkExp"}</span>
        </Link>
        <Link
            className={`w-full flex items-center justify-center gap-2 cursor-pointer py-4 hover:shadow-none hover:bg-gray-700 hover:text-black  transition-all duration-200 border border-gray-700 rounded-full text-sm ${currentSection == "projects" ? "bg-gray-800" : "bg-transparent"}`}
            href="/?view=projects" scroll={false}>
                                <span
                                    className="bg-clip-text text-transparent transition-all duration-200 bg-gradient-to-r from-indigo-400 to-pink-400 text-lg font-bold">{"Projects"}</span>
        </Link>

    </div>;
}