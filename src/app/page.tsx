import About from "@/components/about/about";
import MainSection from "@/components/main/main-section";
import type {Metadata} from "next";
import projects from "@/data/projects.json"
import workExp from "@/data/work-experience.json"
import {SearchParams} from "next/dist/server/request/search-params";
import createMetadata from "@/sections/metadata";

export const metadata: Metadata = createMetadata({
    title: "Shayan's Portfolio",
    description: "A portfolio website outlining my experiences and projects"
})

export const runtime = 'edge';

export default async function Bio({searchParams}: { searchParams: SearchParams }) {
    const {view} = await searchParams
    return <>
        {/* Hero */}
        <About/>

        {/* Main Section */}
        <MainSection projects={projects} workExp={workExp} view={view}/>
    </>;
}
