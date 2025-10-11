import Header from "./sections/header/header.tsx";
import {Footer} from "./sections/footer/Footer.tsx";
import MyRouter from "./router.tsx";


export default function PortfolioLandingPage() {


    return (
        <div
            className="min-h-screen min-w-screen bg-gradient-to-b from-gray-950 via-gray-850 to-gray-900 text-gray-100 antialiased">
            <Header/>

            <main className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center">

                <MyRouter/>

                {/* Footer */}
                <Footer/>
            </main>
        </div>
    );
}
