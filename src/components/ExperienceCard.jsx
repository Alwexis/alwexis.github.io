import { useState } from "react";

export default function WorkCard(data) {
    return (
        <div className="w-full flex flex-col py-4 px-6 bg-neutral-200/50 rounded-sm border border-neutral-50 my-2.5">
            <h2 className="font-bold w-full flex justify-between items-start">
                <span>{data.name}</span>
                <a
                    className="font-semibold text-neutral-700 flex flex-col w-fit cursor-pointer after:max-w-0 hover:text-neutral-500 hover:after:max-w-full after:w-full after:bg-neutral-500 after:h-[1px] after:transition-all after:duration-500"
                    href={data.company.url}
                    target="_blank"
                >
                    <span className="flex items-start">
                        {data.company.name}
                        <svg className="w-2.5 h-2.5 ml-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"/></svg>
                    </span>
                </a>
            </h2>
            <section className="text-neutral-700 font-light text-xs mt-1 w-full flex justify-between items-center">
                <span>
                    {data.startDate} - {data.endDate}
                </span>
                <span>{data.location}</span>
            </section>
            <div className="w-[90%] self-center bg-neutral-300 h-0.5 my-2" />
            <section className="flex flex-col items-start justify-between">
                <p className="w-full text-sm h-fit">
                    {data.description}
                </p>
            </section>
            <span className="text-sm">What I did:</span>
            <ul className="list-disc list-inside text-sm text-neutral-800 font-light">
                {data.activities.map((activity, index) => (
                    <li className="ml-2" key={`activity_${index}`}>{activity}</li>
                ))}
            </ul>
            <div className="w-[90%] self-center bg-neutral-300 h-0.5 my-2" />
            <section>
                {data.skills.map((tech) => (
                    <span
                        key={`${data.name}_${tech.name}`}
                        className="inline-block font-mono px-2 py-1 rounded-sm text-xs border border-neutral-300 mr-2 my-0.5"
                    >
                        {tech.name}
                    </span>
                ))}
            </section>
        </div>
    );
}
