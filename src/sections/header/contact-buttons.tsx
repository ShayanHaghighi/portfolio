import LinkedinButton from "./linkedin-button";
import Divider from "./divider";
import { CvButton } from "./cv-button";
import ThemeToggle from "@/components/theme-toggle";


export default function ContactButtons() {


    return (
        <nav
            className="flex flex-wrap flex-row items-center justify-end gap-2 sm:gap-4 text-sm w-full md:min-w-[32em] md:w-1/3">

            <CvButton />

            {/*<Divider />*/}

            <LinkedinButton />

            {/*<Divider />*/}

            <ThemeToggle />

        </nav>
    )
}
