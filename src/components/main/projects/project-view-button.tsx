import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function ProjectViewButton(props: { id: string }) {
    return <div className="mt-4 w-full">
        <Link
            href={`/project/${props.id}`}
            className="w-full ml-auto mt-4 flex  text-lg text-center p-1 rounded-full gradient cursor-pointer"
        >
            <span
                className="flex gap-2 flex-row items-center justify-center py-2 w-full rounded-full
                    border-2 hover:border-button-secondary-border-hover border-button-secondary-border bg-button-secondary-bg ">
                <span>View</span>
                <FaArrowAltCircleRight />
            </span>
        </Link>
    </div>;
}
