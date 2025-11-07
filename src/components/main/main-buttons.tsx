import Link from "next/link";
import {Section} from "@/types/sections";


function SectionButton({sectionName,sectionKey,currentSection}:{sectionName:string,sectionKey:string,currentSection: "projects" | "workexp"}) {
    return (<Link
        className={`section-button ${sectionKey===currentSection && "section-button-selected"} rounded-full`}
        href={`/?view=${sectionKey}`}
        scroll={false}
    >
    <span
        className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 text-lg font-bold"
    >
      {sectionName}
    </span>
    </Link>);
}

export default function MainButtons({currentSection,}: { currentSection: Section }) {
    return <div
        className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 my-6 text-[#4f46e5]">
        {<SectionButton sectionName="Work Experience" sectionKey={"workexp"} currentSection={currentSection} />}
        {<SectionButton sectionName="Projects" sectionKey={"projects"} currentSection={currentSection} />}


    </div>
        ;
}

/*{`w-full flex items-center bg-white dark:bg-gray-900   justify-center gap-2 cursor-pointer py-3 border  rounded-full text-sm font-semibold transition-all duration-200
  ${
            currentSection === sectionKey
                ? "bg-gradient-to-br      from-indigo-100      to-pink-100 border-indigo-300 text-indigo-700 shadow-lg" +
                  "bg-gradient-to-br dark:from-slate-950  dark:to-blue-900"

                : "   border-gray-200  hover:bg-gradient-to-bl      hover:from-indigo-50       hover:to-pink-50  hover:border-indigo-200 hover:shadow-md" +
                "dark:border-gray-600  hover:bg-gradient-to-bl dark:hover:from-slate-900  dark:hover:to-blue-900"

        }`}*/