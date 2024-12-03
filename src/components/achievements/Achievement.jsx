import { useMemo } from "react";
import AchievementInfo from "./AchievementInfo";

export default function Achievement({ achievements }) {

    const sortedAchievements = useMemo(() => {
        return [...achievements].sort((a, b) => b.data.priority - a.data.priority);
    }, [achievements]);

    return (
        <div className="flex flex-col mt-16">
            <h2 className="font-bold font-nunito-sans tracking-widest text-neutral-100 text-2xl">
                Achievements
            </h2>
            <section className="flex flex-col my-2 space-y-3">
                {sortedAchievements.map((achievement) => (
                    <AchievementInfo
                        key={achievement.id}
                        achievement={achievement.data}
                    />
                ))}
            </section>
        </div>
    );
}
