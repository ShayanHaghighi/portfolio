import projects from "../../../../public/data/projects.json";
import type {Project} from "@/types/project";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import Link from "next/link";

export async function getStaticPaths() {

    const paths =  projects.map((project: Project) => ({params: {id: project.id}}))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }:{params:{id: string}}) {
    const res = projects.filter(project => project.id === params.id)
    if (res.length === 0) {
        console.log("no projects found")
    }

    const project = res[0]


    return {props: {project}}
}

export default function ProjectFull({project}: { project: Project }) {

    return (
        <div>
            <Link href="/" className="flex flex-row items-center gap-4 bg-gray-600 w-fit p-4 rounded-full">
            <FaArrowAltCircleLeft/>
                Back
            </Link>
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Under construction</h1>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/UnderCon.svg" alt="projects"/>
            </div>

            <div>
                <dl>
                    <dt className="text-lg font-bold">Id</dt>
                    <dd>{project.id}</dd>
                    <dt className="text-lg font-bold">Title</dt>
                    <dd>{project.title}</dd>
                    <dt className="text-lg font-bold">Summary</dt>
                    <dd>{project.description}</dd>
                    <dt className="text-lg font-bold">Tags</dt>
                    <dd>{JSON.stringify(project.tags)}</dd>
                    <dt className="text-lg font-bold">Description</dt>
                    <dd>
                        <div dangerouslySetInnerHTML={{__html: project.content}}></div>
                    </dd>
                </dl>
            </div>
        </div>
    )
}