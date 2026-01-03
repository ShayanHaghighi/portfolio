'use client'
import LinkedinButton from "./linkedin-button";
import { CvButton } from "./cv-button";
import ThemeToggle from "@/components/theme-toggle";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import useWindowSize from "./use-window-size";


export default function ContactButtons() {

    const [isOpen, setIsOpen] = useState(true)
    const size = useWindowSize();
    useEffect(() => {

        if (size.width != undefined && size.width > 640) {
            setIsOpen(true)
        }
    }, [size])


    return (
        <nav className="flex flex-col items-center justify-center w-full sm:w-fit"
        >
            <div className={`${!isOpen ? "overflow-hidden mb-0 max-h-[0px] " : "block mb-4 max-h-12"} transition-all ease-out duration-300  flex flex-wrap flex-row items-center justify-center sm:justify-end gap-2 sm:gap-4 text-sm w-full sm:min-w-[26em] sm:w-1/3`}>
                <CvButton />

                <LinkedinButton />

                <ThemeToggle />
            </div>
            <MdKeyboardArrowDown className={`sm:hidden text-text-primary size-8 -m-3 cursor-pointer ${isOpen && "rotate-180"}`} onClick={() => setIsOpen(!isOpen)} />

        </nav>
    )
}
