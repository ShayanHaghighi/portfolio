import {motion} from "framer-motion";
import './App.css'
import ProjectSection from "./components/projects-section.tsx";
import Facts from "./components/facts.tsx";
import Nav from "./components/nav.tsx";
import {type ReactElement, useState} from "react";
import projects from './data/projects.json'

// Portfolio landing page (single-file React + Tailwind + Framer Motion)
// - Default export a React component
// - Uses Tailwind utility classes (assumes Tailwind is configured)
// - Replace placeholder links (resume, github, email) with your real ones

type Section = "Projects" | "WorkExp" | "CV"

type SectionElement = {
    type: Section;
    element: ReactElement<any, any>;
}

const sections: SectionElement[] = [
    {
        type: "Projects",
        element: (<ProjectSection projects={projects}/>)
    },
    {
        type: "WorkExp",
        element: (<div>WorkExperience</div>)
    },
    {
        type: "CV",
        element: (<div>CV</div>)
    },
]

export default function PortfolioLandingPage() {

    const [currentSection, setCurrentSection] = useState("Projects");


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

            <main className="max-w-6xl mx-auto px-6 py-12 flex-row ">
                {/* Hero */}
                <section className="flex flex-wrap md:flex-nowrap items-center md:justify-between justify-center gap-4">
                    <motion.div
                        initial={{opacity: 0, y: 12}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="space-y-6"
                    >

                        <p className="text-gray-300 max-w-xl">
                            I build full-stack and front-end experiences using React + TypeScript and ship
                            production-ready systems for
                            computer vision, local AI tooling, and small games. I enjoy turning research and ideas
                            (YOLOv8 pipelines,
                            embedding search, Godot games) into polished, maintainable products recruiters and teams can
                            evaluate.
                        </p>


                        <div className="flex flex-wrap gap-3">
                            <a href="#projects"
                               className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-md shadow-sm font-medium">
                                View projects
                            </a>
                            <a href="mailto:you@example.com"
                               className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md text-sm">
                                Say hello
                            </a>
                        </div>

                        <div className="mt-4 text-sm text-gray-400">
                            Current focus: improving CV-ready project writeups, reproducible model training pipelines,
                            and shipping a 2-player
                            Godot board game.
                        </div>
                    </motion.div>

                    <Facts/>


                </section>
                <div className="mt-10 text-gray-500">Click to view:</div>
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 my-6 text-[#646cff]">
                    {
                        sections.map((section) => (
                            <button
                                key={section.type}
                                className="w-full items-center gap-2 py-4 bg-transparent cursor-pointer hover:shadow-none hover:bg-gray-700 hover:text-black  transition-all duration-200 border border-gray-700 rounded-full text-sm"
                                onClick={() => setCurrentSection(section.type)}>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 text-lg font-bold">{section.type}</span>
                            </button>
                        ))
                    }

                </div>
                {/*<ProjectSection projects={projects}/>*/}

                {
                    sections.map(section => (
                         section.type == currentSection &&
                        <motion.div
                            key={section.type}
                            initial={{opacity: 0, y: 6}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3}}
                            className="space-y-6"
                        >
                            {section.element}
                        </motion.div>
                    ))
                }

                {/* Footer */}
                <footer className="mt-16 text-center text-gray-500 text-sm pb-8">
                    Built with React + TypeScript • Designed for recruiters and interviewers
                </footer>
            </main>
        </div>
    );
}
