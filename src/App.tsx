import {motion} from "framer-motion";
import ProjectSection from "./components/projects-section.tsx";
import Nav from "./components/nav.tsx";
import {useState} from "react";
import projects from './data/projects.json'
import workExp from './data/work-experience.json'
import WorkExperience from "./components/wex-section.tsx";

type Section = "Projects" | "WorkExp"


const sections: Section[] = [
    "WorkExp",
    "Projects",
]

export default function PortfolioLandingPage() {

    const [currentSection, setCurrentSection] = useState("WorkExp");

    function getSection() {
        switch (currentSection) {
            case "Projects":
                return <ProjectSection projects={projects}/>
            case "WorkExp":
                return <WorkExperience workExp={workExp}/>

        }
    }

    return (
        <div
            className="min-h-screen min-w-screen bg-gradient-to-b from-gray-950 via-gray-850 to-gray-900 text-gray-100 antialiased">
            <header
                className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b-2 border-gray-900">

                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-white">SH
                    </div>
                    <div>
                        <div className="text-sm font-semibold">Shayan Haghighi</div>
                        <div className="text-xs text-gray-300">Software Engineer — React · TypeScript · Computer
                            Vision
                        </div>
                    </div>
                </div>

                <Nav/>

                <div className="md:hidden">
                    {/* simple mobile menu (could be replaced by a drawer) */}
                    <a href="#projects" className="text-sm">Menu</a>
                </div>

            </header>


            <main className="max-w-6xl mx-auto px-6 py-6 flex-row ">
                {/* Hero */}
                <section className="flex flex-wrap md:flex-nowrap items-start md:justify-between justify-center gap-4">
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="space-y-6 py-6 text-center"
                    >

                        <span className="text-gray-300 max-w-xl">
                            4th-year Computer Science student at the University of Birmingham, predicted First Class
                            Honours (avg. 85%) with a strong academic record (A*A*A*A at A-Level). I have hands-on
                            experience in backend engineering, machine learning, and cloud automation, and a particular
                            interest in building reliable, automated testing and deployment pipelines. Beyond academics,
                            I enjoy volleyball, chess, and football, as well as creative work like video editing in
                            DaVinci Resolve and digital design in Photoshop. I’m bilingual in English and Persian and
                            passionate about combining technical skill with creativity to deliver polished, impactful
                            projects.
                        </span>


                        {/*<div className="flex flex-wrap gap-3">*/}
                        {/*    <a href="#projects"*/}
                        {/*       className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-md shadow-sm font-medium">*/}
                        {/*        View projects*/}
                        {/*    </a>*/}
                        {/*    <a href="mailto:you@example.com"*/}
                        {/*       className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md text-sm">*/}
                        {/*        Say hello*/}
                        {/*    </a>*/}
                        {/*</div>*/}

                        <div className="mt-6 text-sm text-gray-400">
                            Current focus: Creating an AI note management tool that performs entity linking, organising
                            notes based on the Wikipedia knowledge graph.
                        </div>
                    </motion.div>

                    {/*<Facts/>*/}


                </section>
                {/*<div className="mt-10 text-gray-500">Click to view:</div>*/}
                <div
                    className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 my-6 text-[#646cff]">
                    {
                        sections.map((section) => (
                            <button
                                key={section}
                                className={`w-full items-center gap-2 cursor-pointer py-4 hover:shadow-none hover:bg-gray-700 hover:text-black  transition-all duration-200 border border-gray-700 rounded-full text-sm ${currentSection == section ? "bg-gray-800" : "bg-transparent"}`}
                                // style={{
                                //     backgroundColor: currentSection==section.type ?  "#364153":"initial",
                                // }}
                                onClick={() => setCurrentSection(section)}>
                                <span
                                    className=" bg-clip-text text-transparent transition-all duration-200 bg-gradient-to-r from-indigo-400 to-pink-400 text-lg font-bold">{section}</span>
                            </button>
                        ))
                    }

                </div>
                {/*<ProjectSection projects={projects}/>*/}

                <div>
                    {getSection()}
                </div>
                {/* Footer */}
                <footer className="mt-16 text-center text-gray-500 text-sm pb-8">
                    Built with React + TypeScript • Designed for recruiters and interviewers
                </footer>
            </main>
        </div>
    );
}
