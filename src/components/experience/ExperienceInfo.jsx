import { useState } from "react";
import Icon from "../Icon";

export default function ProjectInfo({ experience }) {

    const [viewMore, setViewMore] = useState(false);
    const handleClick = () => {
        setViewMore(!viewMore);
    }

    return (
        <div className="flex flex-col text-neutral-200 bg-neutral-900 transition-all rounded-sm h-fit px-4 py-2 max-w-full">
            {
                experience.company.url && experience.company.url != '' ?
                <a href={experience.company.url} target="_blank">
                    <h1 className="flex flex-col md:flex-row md:items-center md:justify-between font-inter font-semibold tracking-widest my-2 text-neutral-200">
                        {experience.name}
                        <span className="text-xs text-red-400 font-nunito flex items-center">
                            {experience.company.name}
                            <Icon className="w-4 ml-1.5" icon="url" />
                        </span>
                    </h1>
                    <div className="flex justify-between w-full text-sm text-neutral-400 font-nunito">
                        <span>{experience.startDate} - {experience.endDate} (<span className="font-semibold text-neutral-300">{experience.difference}</span>)</span>
                    </div>
                </a>
                :
                <section>
                    <h1 className="flex flex-col md:flex-row md:items-center md:justify-between font-inter font-semibold tracking-widest my-2 text-neutral-200">
                        {experience.name} <span className="text-xs text-neutral-400 font-nunito">{experience.company.name}</span>
                    </h1>
                    <div className="flex justify-between w-full text-sm text-neutral-400 font-nunito">
                        <span>{experience.startDate} - {experience.endDate} (<span className="font-semibold text-neutral-300">{experience.difference}</span>)</span>
                    </div>
                </section>
            }
            <section className="text-sm font-nunito my-2">
                <p className={`${viewMore ? 'max-h-96' : 'max-h-6'} overflow-hidden duration-500 transition-all text-neutral-300 mb-2`}>
                    {experience.description}
                </p>
                <span onClick={handleClick} className="text-red-400 hover:text-red-500 tracking-wider transition-all cursor-pointer">
                    {
                        viewMore ? 'Read less...' : 'Read more...'
                    }
                </span>
            </section>
            <div className="h-[1px] w-full bg-neutral-800 my-2"></div>
            <section className="h-fit">
                <h3 className="font-inter font-semibold tracking-widest">
                    Activities:
                </h3>
                <div className="h-full">
                    {
                        experience.activities.map((activity) => {
                            const randId = Math.floor(Math.random() * 1000);
                            return (
                                <div key={randId} className="flex items-start my-1 text-sm">
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
