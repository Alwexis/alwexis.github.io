import { useMemo } from "react";
import ExperienceInfo from "./ExperienceInfo";

export default function Stack({ experiences }) {

    const sortedExperiences = useMemo(() => {
        return [...experiences].sort((a, b) => b.data.priority - a.data.priority);
    }, [experiences]);

    return (
        <div className="flex flex-col">
            <h2 className="font-bold font-nunito-sans tracking-widest text-neutral-100 text-2xl">
                Experience
            </h2>
            <section className="flex flex-col my-2 space-y-3">
                {sortedExperiences.map((experience) => (
                    <ExperienceInfo
                        key={experience.id}
                        experience={experience.data}
                    />
                ))}
            </section>
        </div>
    );
}
