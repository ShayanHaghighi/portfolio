import {motion} from "framer-motion";
import StrongText from "../../../components/strong-text.tsx";

export default function About() {
    return (
            <section
                className="max-w-3xl flex flex-wrap md:flex-nowrap items-start md:justify-between justify-center gap-4">
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="space-y-6 py-6 text-center"
                >
                    <h1 className="text-4xl font-semibold">About Me</h1>

                    <span className="text-gray-300 max-w-xl">
                            4th-year Computer Science student at the <strong>University of Birmingham</strong>, predicted 1st Class
                            Honours (avg. 85%).
                            I have hands-on
                            experience in <StrongText>backend engineering</StrongText>, <StrongText>machine learning</StrongText>, and <StrongText>cloud automation</StrongText>, and a particular
                            interest in building reliable, automated testing and deployment pipelines.

                            <br/>
                            <br/>
                            Beyond academics,
                            I enjoy volleyball, chess, and football, as well as creative work like video editing in
                            DaVinci Resolve and digital design in Photoshop. I’m bilingual in English and Persian and
                            passionate about combining technical skill with creativity to deliver polished, impactful
                            projects.
                        </span>
                    <div className="mt-6 text-sm text-gray-400">
                        Current focus: Creating an AI note management tool that performs entity linking, organising
                        notes based on the Wikipedia knowledge graph.
                    </div>
                </motion.div>

                {/*<Facts/>*/}


            </section>
    )
}