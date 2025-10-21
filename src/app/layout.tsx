import "./globals.css";
import Header from "@/sections/header/header";
import {Footer} from "@/sections/footer/Footer";
import Head from "next/head";

export default function Layout({children}:{  children: React.ReactNode}) {
    return (
        <html lang="en">
        <Head>
            <meta name="description" content="Shayan Haghighi's portfolio page" />
            <meta name="title" content="Shayan's portfolio" />
            <link rel="icon" type="image/svg+xml" href="/sh.svg"/>


            {/* Open Graph */}
            <meta property="og:title" content="Shayan's portfolio" />
            <meta property="og:description" content="This is my portfolio About page" />
            <meta property="og:image" content="/og-image.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1034" />
            <meta property="og:image:height" content="1034" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="About Me" />
            <meta name="twitter:description" content="Shayan's portfolio page" />
            <meta name="twitter:image" content="og-image.png" />
        </Head>
        <body>

        <div
            className="min-h-screen min-w-screen bg-gradient-to-b from-gray-950 via-gray-850 to-gray-900 text-gray-100 antialiased">

            <Header/>
            <main className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center">
                {children}
                <Footer/>
            </main>

        </div>

        </body>
        </html>
    );
}
