import LinkedinButton from "./linkedin-button";
import Divider from "./divider";
import {CvButton} from "./cv-button";
import ThemeToggle from "@/components/ThemeToggle";


export default function ContactButtons() {


    return (
        <nav className="flex items-center justify-center gap-2 sm:gap-4 text-sm w-full md:min-w-[32em] md:w-1/3">

            <ThemeToggle/>

            <Divider/>

            <LinkedinButton/>

            <Divider/>

            <CvButton/>

        </nav>
    )
}