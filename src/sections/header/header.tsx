import ContactButtons from "./contact-buttons";
import Link from "next/link";

export default function Header() {
    return (
            <header
                className="max-w-6xl mx-auto px-6 py-3 sm:py-6 flex md:flex-row flex-col gap-4 md:items-center items-start justify-between border-b-2 border-gray-900">

                <div className="flex items-center gap-3">
                    <Link
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-white cursor-pointer"
                    href="/"
                    >SH
                    </Link>
                    <div>
                        <div className="text-sm font-semibold">Shayan Haghighi</div>
                        <div className="text-xs dark:text-gray-300">Software Engineer — Full Stack · ML · Automated Testing
                        </div>
                        <div className="text-xs dark:text-gray-400 text-gray-600">shayan.haghighi04@gmail.com</div>
                    </div>
                </div>

                <ContactButtons/>
            </header>
    )
}