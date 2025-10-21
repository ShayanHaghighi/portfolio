import projects from "@/data/projects.json";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import Link from "next/link";
import {notFound} from "next/navigation";
import Image from "next/image";


export async function generateStaticParams() {
    return projects.map(p => ({id: p.id}));
}

export const runtime = 'edge';

export default async function ProjectFull({params}: { params: { id: string } }) {
    const {id} = await params;
    const project = projects.find(p => p.id === id);
    console.log(project?.id);
    if (!project) {
        // This tells Next.js to render the 404 page
        notFound();
    }

    return (
        <div>
            <Link href="/" className="flex flex-row items-center gap-4 bg-gray-600 w-fit p-4 rounded-full">
                <FaArrowAltCircleLeft/>
                Back
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