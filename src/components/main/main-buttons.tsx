import Link from "next/link";
import { Section } from "@/types/sections";
import { MdWork } from "react-icons/md";
import { FaGitAlt } from "react-icons/fa";


function SectionButton({ children, sectionKey, currentSection, idx }: { children: React.ReactNode, sectionKey: string, currentSection: "projects" | "workexp", idx: number }) {
    return (<Link
        className={`section-button  ${sectionKey === currentSection ? `section-button-${idx}-selected` : `section-button-${idx}-unselected`}`}
        href={`/?view=${sectionKey}`}
        scroll={false}
    >
        {children}
    </Link>);
}

export default function MainButtons({ currentSection, }: { currentSection: Section }) {
    return <div
        className=" w-full flex flex-col sm:flex-row justify-center items-center gap-4 px-4 my-6">
        {<SectionButton idx={2} sectionKey={"workexp"} currentSection={currentSection} >
            <MdWork className="text-xl" />
            <span className="font-bold text-xl">
                Work Experience
            </span>
        </SectionButton>
        }
        {<SectionButton idx={1} sectionKey={"projects"} currentSection={currentSection} >
            <FaGitAlt className="text-xl" />
            <span className="font-bold text-xl">
                Projects
            </span>
        </SectionButton>}


    </div>
        ;
}

