import "./globals.css";
import Header from "@/sections/header/header";
import {Footer} from "@/sections/footer/Footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>

        <div
            className="min-h-screen min-w-screen bg-gradient-to-br from-gray-950 via-gray-850 to-gray-800 text-gray-100 antialiased">

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
