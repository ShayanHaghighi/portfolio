import type { WorkExp } from "@/types/workExp.ts";
import WexItem from "./wex-item";
import BgText from "@/components/bg-text";

export default function WorkExperience({ workExp }: { workExp: WorkExp[] }) {

    const dateFormat: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };

    function isValidDate(d: Date) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return !isNaN(d);
    }

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        if (isValidDate(date)) {
            return date.toLocaleDateString("en-US", dateFormat)

        }
        return dateString

    }

    return (
        <section id="projects" className="mt-2">
            <h2 className="text-4xl font-bold section-header-2 ">Work Experience</h2>
            <BgText>
                Key work experience in recent years
            </BgText>

            <div className="mt-6 flex flex-col flex-nowrap gap-0 sm:px-[10%] ">
                {workExp.map((workExp) => (
                    <WexItem key={workExp.id} workExp={workExp} startDate={formatDate(workExp.startDate)}
                        endDate={formatDate(workExp.endDate)}
                    />
                ))}
            </div>
        </section>
    )
}
