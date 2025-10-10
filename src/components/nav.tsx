import {MdContentCopy, MdDownload} from "react-icons/md";
import {FaLinkedin} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {useState} from "react";
import {FaCheck} from "react-icons/fa";

const divider = <div className="h-10 w-0.5 bg-gray-700"/>

export default function Nav() {
    const [hasCopied, setHasCopied] = useState(false);

    function writeToClipboard(text: string) {
        navigator.clipboard.writeText(text).then(
            () => {
                setHasCopied(true);
                setTimeout(() => {
                    setHasCopied(false)
                }, 1000)
            },
            () => {
                console.log("Not Copied to clipboard");
            },
        );
    }

    function copyToClipboard(text: string) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        navigator.permissions.query({name: "clipboard-write"}).then((result) => {
            if (result.state === "granted" || result.state === "prompt") {
                writeToClipboard(text)
            }
        }).catch(() => {
            writeToClipboard(text)
        });
    }

    return (
        <nav className="hidden md:flex items-center justify-center gap-4 text-sm">

            <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-2 px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
                <FaLinkedin className="size-5"/>
                LinkedIn
            </a>

            {divider}

            <div className="flex-1 flex items-center justify-center gap-4">
                <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                >
                    <IoIosMail className="size-5"/>
                    Email
                </a>
                <div className="">
                    <MdContentCopy className="cursor-pointer "
                                   onClick={() => copyToClipboard("your.email@example.com")}/>
                    {hasCopied && <FaCheck className="absolute -translate-x-0"/>}</div>
            </div>

            {divider}

            <a
                href="/CV.pdf"
                className="flex-1 px-8 py-2 rounded-md bg-white hover:brightness-75 text-gray-900 font-medium shadow-sm flex flex-row items-center justify-between gap-2"
                download
            >
                <span>CV</span>
                <MdDownload className="size-4"/>
            </a>

        </nav>
    )
}