import About from "@/components/about/about";
import type { Metadata } from "next";
import createMetadata from "@/sections/metadata";

export const metadata: Metadata = createMetadata({
    title: "Shayan's Portfolio",
    description: "A portfolio website outlining my experiences and projects",

})

export const runtime = 'edge';

export default async function Layout({ children }: { children: React.ReactNode }) {

    return <>
        {/* Hero */}
        <About />

        {/* Main Section */}
        {children}
    </>;
}
