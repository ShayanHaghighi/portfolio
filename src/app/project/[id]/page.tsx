import projects from "@/data/projects.json";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import Link from "next/link";
import {notFound} from "next/navigation";
import Image from "next/image";
import {Metadata} from "next";
import createMetadata from "@/sections/metadata";


export async function generateStaticParams() {
    return projects.map(p => ({id: p.id}));
}

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    {params}: Props
): Promise<Metadata> {

    const {id} = await params

    const project = projects.find(p => p.id === id);
    if (!project) {
        return createMetadata({title: "Project Not Found | shaghighi", description: "Project Not Found"})
    }

    return createMetadata({title: project.title + " | shaghighi", description: project.description, path: id});
}

export default async function ProjectFull({params}: { params: { id: string } }) {
    const {id} = await params;
    const project = projects.find(p => p.id === id);
    console.log(project?.id);
    if (!project) {
        notFound();
    }

    return (
        <div>
            <Link
                href="/"
                className="w-40 mr-auto mt-4 flex text-lg text-center p-1 rounded-full gradient cursor-pointer"
            >
                <span
                    className="flex gap-2 flex-row items-center justify-center  py-2 w-full rounded-full border-2 hover:border-transparent border-gray-600 bg-gray-800 hover:bg-white hover:text-black transition-bg duration-300">
                    <FaArrowAltCircleLeft/>
                    <span>Back</span>
                </span>
            </Link>
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Under construction</h1>
                <Image height={100} width={100} src="/UnderCon.svg" alt="projects"/>
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