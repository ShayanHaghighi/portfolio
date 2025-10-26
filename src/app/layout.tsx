import "./globals.css";
import Header from "@/sections/header/header";
import {Footer} from "@/sections/footer/Footer";

export default async function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              (function() {
                let theme;
                try {
                  theme = localStorage.getItem('theme');
                } catch (e) {}                

                if (theme === 'dark') {
                console.log("dark from localStorage");
                  document.documentElement.setAttribute('data-theme','dark');
                  return;
                } else {
                console.log("light from localStorage");
                   document.documentElement.removeAttribute('data-theme');
                return;
                }
                
                let matches = (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
                
                if (matches) {
                console.log("dark from media query");
                  document.documentElement.setAttribute('data-theme','dark');
                  localStorage.setItem('theme','dark');
                } else {
                console.log("light from media query");
    document.documentElement.removeAttribute('data-theme');
                  localStorage.removeItem('theme');
                }
                
              })();
            `,
                }}
            />
        </head>
        <body>

        <div
            className="min-h-screen min-w-screen bg-gradient-to-br dark:from-gray-950 dark:via-gray-850 dark:to-gray-800 to-indigo-200 from-purple-100 dark:text-gray-100 antialiased">

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
