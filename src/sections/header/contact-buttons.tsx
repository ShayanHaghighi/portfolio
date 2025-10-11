import LinkedinButton from "./linkedin-button.tsx";
import {EmailButton} from "./email-button.tsx";
import Divider from "./divider.tsx";
import {CvButton} from "./cv-button.tsx";


export default function ContactButtons() {


    return (
        <nav className="flex items-center justify-center gap-2 sm:gap-4 text-sm w-full md:min-w-[32em] md:w-1/2">

            <LinkedinButton/>

            <Divider/>

            <EmailButton />

            <Divider/>

            <CvButton/>

        </nav>
    )
}