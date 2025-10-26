import projects from "@/data/projects.json";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import Link from "next/link";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import createMetadata from "@/sections/metadata";
import {Project} from "@/types/project";
import React from "react";
import "./styles/markdown-styles.css"
import "./styles/copy-button.css"

// Code syntax highlighting styles
// More can be found at https://github.com/highlightjs/highlight.js/tree/5697ae5187746c24732e62cd625f3f83004a44ce/src/styles
import './styles/base-16-spacemacs.css'
import CopyButtonObserver from "@/app/project/[id]/copy-button-observer";
import Tags from "@/components/main/tags";


export async function generateStaticParams() {
    return projects.map(p => ({id: p.id}));
}

type GenerateProps = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    {params}: GenerateProps
): Promise<Metadata> {

    const {id} = await params
    const project = projects.find(p => p.id === id);
    return project ? createMetadata({
        title: project.title + " | shaghighi",
        description: project.description,
        path: id
    }) : createMetadata({title: "Project Not Found | shaghighi", description: "Project Not Found"})
}


export default async function ProjectFull({params}: { params: { id: string } }) {


    const {id} = await params;
    const project: Project | undefined = projects.find(p => p.id === id);
    if (!project) {
        notFound();
    }


    return (


        <div
            className="max-w-6xl w-full px-8 transform transition-all duration-300 ">
            <CopyButtonObserver/>

            <div  className=" flex flex-col-reverse md:flex-row justify-between w-full items-start md:items-center">

                <header className="mb-6">
                    <span
                        className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        {project.title}
                    </span>
                    <div className="text-lg ml-4 text-gray-400">{project.description}</div>
                </header>
                <Link
                    href="/?view=projects"
                    className="w-40 mb-4 flex text-lg text-center p-1 rounded-full gradient cursor-pointer"
                >
                <span
                    className="flex gap-2 flex-row items-center justify-center  py-2 w-full rounded-full border-2 hover:border-transparent border-gray-600 dark:bg-gray-800 bg-gray-200 hover:bg-gray-400 dark:hover:bg-white hover:text-black  hover:text-black transition-bg duration-300">
                    <FaArrowAltCircleLeft/>
                    <span>Back</span>
                </span>
                </Link>
            </div>


                <Tags tags={project.tags}/>


            <section className="prose prose-invert max-w-none mb-10 dark:text-gray-300 leading-relaxed">
                <div dangerouslySetInnerHTML={{__html: project.content}}></div>
            </section>


            <div className="flex items-center gap-4">
                {project.repo ? (

                    <Link href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        View Repository

                    </Link>
                ) : (
                    <span className="text-sm text-gray-500">Repository link not provided</span>
                )}


            </div>
        </div>
    )
}