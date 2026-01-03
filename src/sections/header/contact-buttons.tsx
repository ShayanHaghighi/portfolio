import LinkedinButton from "./linkedin-button";
import { CvButton } from "./cv-button";
import ThemeToggle from "@/components/theme-toggle";


export default function ContactButtons() {


    return (
        <nav
            className="flex flex-row justify-center items-center sm:justify-end gap-2 sm:gap-4 text-sm w-full sm:min-w-[26em] sm:w-1/3">

            <CvButton />

            <LinkedinButton />

            <ThemeToggle />

        </nav>
    )
}
