import {IoIosMail} from "react-icons/io";
import {TfiNewWindow} from "react-icons/tfi";
import {MdContentCopy} from "react-icons/md";
import {FaCheck} from "react-icons/fa";
import {useState} from "react";

export function EmailButton() {
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

    return <div className="flex-1 flex items-center justify-center gap-2 ">
        <a
            href="mailto:shayan.haghighi04@gmail.com"
            className="flex items-center px-2 justify-center gap-2 w-full py-2 h-10 bg-[#6c1c1c] text-white rounded hover:bg-gray-900 transition"
        >
            <IoIosMail className="size-5"/>
            <span className="font-semibold">Email</span>
            <TfiNewWindow className="hidden sm:inline-block size-4 -translate-y-0.5"/>
        </a>
        <div className="hidden sm:inline-block p-1 rounded-md hover:bg-gray-800 active:bg-gray-600"
             onClick={() => copyToClipboard("shayan.haghighi04@gmail.com")}>
            <MdContentCopy className="cursor-pointer size-5"/>
            {hasCopied && <FaCheck className="absolute translate-x-1 translate-y-1"/>}
        </div>
    </div>;
}