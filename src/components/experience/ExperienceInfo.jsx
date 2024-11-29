import { useState } from "react";
import Icon from "../Icon";

export default function ProjectInfo({ experience }) {

    const [viewMore, setViewMore] = useState(false);
    const handleClick = () => {
        setViewMore(!viewMore);
    }

    return (
        <div className="flex flex-col text-neutral-200 bg-neutral-900 transition-all rounded-sm h-fit my-0.5 px-4 py-2 max-w-full">
            <section>
                <h1 className="flex items-center justify-between font-inter font-semibold tracking-widest my-2 text-neutral-200">
                    {experience.name} <span className="text-xs text-neutral-400 font-nunito">{experience.company.name}</span>
                </h1>
                <div className="flex justify-between w-full text-sm text-neutral-400 font-nunito">
                    <span>{experience.startDate} - {experience.endDate} (<span className="font-semibold text-neutral-300">{experience.difference}</span>)</span>
                </div>
            </section>
            <section className="text-sm font-nunito my-2">
                <p className={`${viewMore ? 'max-h-96' : 'max-h-6'} overflow-hidden duration-500 transition-all text-neutral-300 mb-2`}>
                    {experience.description}
                </p>
                <span onClick={handleClick} className="text-red-400 hover:text-red-500 tracking-wider transition-all cursor-pointer">
                    Read more...
                </span>
            </section>
            <div className="h-[1px] w-full bg-neutral-800 my-2"></div>
            <section>
                <h3 className="font-inter font-semibold tracking-widest">
                    Activities:
                </h3>
                <div>
                    {
                        experience.activities.map((activity) => {
                            const randId = Math.floor(Math.random() * 1000);
                            return (
                                <div key={randId} className="flex items-center my-1 text-sm">
                                    <Icon icon="arrow-right" className="w-4 h-4 mr-1 text-red-400" />
                                    <span className="text-neutral-400">{activity}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </div>
    );
}
