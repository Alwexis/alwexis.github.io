import { useState } from 'react';

export default function ExperienceCard({ experience }) {
    const [ showMore, setShowMore ] = useState(false);

    return (
        <div className="colored-corners-2 px-8 py-8 h-fit w-full flex flex-col">
            <a href={experience.company.url} target='_blank' className="flex flex-col md:flex-row md:items-center space-x-2 text-lg md:text-xl font-space-grotesk text-neutral-100">
                <h4>{experience.name}</h4>
                <span className='hidden md:block'>-</span>
                <h3 className="font-semibold flex items-start">
                    {experience.company.name}
                    <svg className='w-3 h-3 ml-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3z"/></svg>
                </h3>
            </a>
            <div className='flex flex-col md:flex-row md:items-center justify-between text-neutral-200 text-sm md:text-xs font-geist-mono my-2'>
                <span>{experience.startDate} - {experience.endDate} ({experience.difference})</span>
                <span>{experience.location}</span>
            </div>
            <p className="text-neutral-300 font-geist font-light overflow-hidden transition-all mb-2">
                {experience.description}
            </p>
            <div>
                <h3>What I did:</h3>
                <ul className='text-neutral-300 font-geist font-light list-disc pl-4'>
                    {
                        experience.activities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='my-4 w-2/3 h-[1px] bg-neutral-200 self-center'></div>
            <section className='flex flex-wrap space-x-2 select-none'>
                {
                    experience.skills.map((skill, index) => (
                        <span key={index} className="text-xs font-geist-mono text-neutral-200 border border-neutral-300 px-2 py-1 rounded-xs my-0.5">
                            {skill.name}
                        </span>
                    ))
                }
            </section>
        </div>
    );
}