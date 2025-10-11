import type {Section} from "../../../types/sections.ts";

interface MainButtonProps {
    currentSection: Section,
    setCurrentSection: (section: Section) => void
}

export function MainButtons({currentSection, setCurrentSection}: MainButtonProps) {
    return <div
        className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 my-6 text-[#646cff]">
        <button
            className={`w-full items-center gap-2 cursor-pointer py-4 hover:shadow-none hover:bg-gray-700 hover:text-black  transition-all duration-200 border border-gray-700 rounded-full text-sm ${currentSection == "WorkExp" ? "bg-gray-800" : "bg-transparent"}`}
            onClick={() => setCurrentSection("WorkExp")}>
                                <span
                                    className=" bg-clip-text text-transparent transition-all duration-200 bg-gradient-to-r from-indigo-400 to-pink-400 text-lg font-bold">{"WorkExp"}</span>
        </button>
        <button
            className={`w-full items-center gap-2 cursor-pointer py-4 hover:shadow-none hover:bg-gray-700 hover:text-black  transition-all duration-200 border border-gray-700 rounded-full text-sm ${currentSection == "Projects" ? "bg-gray-800" : "bg-transparent"}`}
            onClick={() => setCurrentSection("Projects")}>
                                <span
                                    className=" bg-clip-text text-transparent transition-all duration-200 bg-gradient-to-r from-indigo-400 to-pink-400 text-lg font-bold">{"Projects"}</span>
        </button>

    </div>;
}