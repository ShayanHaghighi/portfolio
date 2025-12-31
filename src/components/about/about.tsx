import StrongText from "@/components/strong-text";
import BgText from "../bg-text";

export default function About() {
    return (
        <section
            className="max-w-3xl flex flex-wrap md:flex-nowrap items-start md:justify-between justify-center gap-4 fade-up-once">
            <div

                className="space-y-6 py-6 text-center "
            >
                <h1 className="text-4xl font-semibold m-auto" style={{
                    marginTop: "0",
                    marginBottom: "1rem",

                }}>About Me</h1>

                <span className="text-text-primary max-w-xl text-lg">
                    4th-year Computer Science student at the <strong>University of Birmingham</strong>, predicted 1st Class
                    Honours (avg. 85%).
                    I have hands-on
                    experience in <StrongText>backend engineering</StrongText>, <StrongText>machine learning</StrongText>, and <StrongText>cloud automation</StrongText>, and a particular
                    interest in building reliable, automated testing and deployment pipelines.

                    <br />
                    <br />
                    Beyond academics,
                    I enjoy volleyball, chess, and football, as well as creative work like video editing in
                    DaVinci Resolve and digital design in Photoshop. I’m bilingual in English and Persian and
                    passionate about combining technical skill with creativity to deliver polished, impactful
                    projects.
                </span>
                <br />
                <BgText >
                    Current focus: Creating an AI note management tool that performs entity linking, organising
                    notes based on the Wikipedia knowledge graph.
                </BgText>
            </div>



        </section>
    )
}
