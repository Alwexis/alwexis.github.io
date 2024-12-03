export default function AchievementInfo({ achievement }) {
    return (
        <div className="flex flex-col text-neutral-200 bg-neutral-900 transition-all rounded-sm h-fit px-4 py-2 max-w-full">
            <section className="w-full flex flex-col md:flex-row md:items-center justify-between">
                <h1 className="flex items-center justify-between font-inter font-semibold tracking-widest text-neutral-200">
                    {achievement.name}
                </h1>
                <h3 className="text-sm text-red-400 mr-1.5 font-nunito">{achievement.event}</h3>
            </section>
            <div className="h-[1px] w-full bg-neutral-800 my-2"></div>
            <span className="text-sm text-neutral-400 font-nunito">{achievement.company.name} - {achievement.date}</span>
            <p className="text-neutral-300 text-sm font-nunito my-2">
                {achievement.description}
            </p>
        </div>
    );
}
