import projects from "@/data/projects.json";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import createMetadata from "@/sections/metadata";
import { Project } from "@/types/project";
import React from "react";
import "./styles/markdown-styles.css"
import "./styles/copy-button.css"

// Code syntax highlighting styles
// More can be found at https://github.com/highlightjs/highlight.js/tree/5697ae5187746c24732e62cd625f3f83004a44ce/src/styles
import './styles/base-16-highlightjs.css'
import CopyButtonObserver from "@/app/project/[id]/copy-button-observer";
import Tags from "@/components/main/tags";
import StrongText from "@/components/strong-text";
import BgText from "@/components/bg-text";


export async function generateStaticParams() {
    return projects.map(p => ({ id: p.id }));
}

type GenerateProps = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params }: GenerateProps
): Promise<Metadata> {

    const { id } = await params
    const project = projects.find(p => p.id === id);
    return project ? createMetadata({
        title: project.title + " | shaghighi",
        description: project.description,
        path: id
    }) : createMetadata({ title: "Project Not Found | shaghighi", description: "Project Not Found" })
}


export default async function ProjectFull({ params }: { params: { id: string } }) {


    const { id } = await params;
    const project: Project | undefined = projects.find(p => p.id === id);
    if (!project) {
        notFound();
    }


    return (


        <div
            className="max-w-6xl w-full px-8 transform transition-all duration-300 ">
            <CopyButtonObserver />

            <div className=" flex flex-col-reverse md:flex-row justify-between w-full items-start md:items-start">

                <header className="mb-6">
                    <StrongText
                        classname="text-4xl md:text-5xl  leading-tight mb-2">
                        {project.title}
                    </StrongText>
                    <BgText classname="ml-4">{project.description}</BgText >
                </header>
                <Link
                    href="/?view=projects"
                    className="w-40 mb-4 flex text-lg text-center p-1 rounded-full gradient cursor-pointer"
                >
                    <span
                        className="flex gap-2 flex-row items-center justify-center min-w-24 py-2 w-full rounded-full border-2 hover:border-button-secondary-border-hover border-button-secondary-border bg-button-secondary-bg transition-bg duration-300">
                        <FaArrowAltCircleLeft />
                        <span>Back</span>
                    </span>
                </Link>
            </div>


            <Tags tags={project.tags} />


            <section className="prose prose-invert max-w-none mb-10 text-text-primary leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
            </section>


            <div className="flex items-center gap-4">
                {project.repo ? (

                    <Link href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-section-1a to-section-1b text-text-inverse rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        View Repository

                    </Link>
                ) : (
                    <span className="text-sm text-text-tertiary">Repository link not provided</span>
                )}


            </div>
        </div>
    )
}
