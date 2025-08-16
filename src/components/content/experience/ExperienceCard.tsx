"use client"

import { Experience } from "@lib/types"
import Image from "next/image"
import { motion } from "framer-motion";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const start_date = new Date(experience.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  const end_date = experience.end_date ? new Date(experience.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "current"

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} className="h-full w-full flex flex-col">
        <section className="flex items-center space-x-4">
            <Image width={40} height={40} className="w-10 h-10 md:w-16 md:h-16 object-contain aspect-square" alt={experience.company.name} src={experience.company.image} />
            <div className="flex flex-col justify-between h-16 w-full text-neutral-300 text-xs md:text-base">
                <h3 className="font-bold text-neutral-100 text-base">{experience.name}</h3>
                <a href={experience.company.url} title={`${experience.company.name}'s website`}  target="_blank" className="flex items-start text-neutral-200">
                    {experience.company.name}
                    <svg className='w-3 h-3 ml-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3z"/></svg>
                </a>
                <div className="w-full flex justify-between">
                    <span>{start_date} - {end_date}</span>
                    <span>{experience.location}</span>
                </div>
            </div>
        </section>
        <p className="text-sm md:text-base text-neutral-200 font-light overflow-hidden transition-all mt-2">
            {experience.description}
        </p>
        <div className="text-sm md:text-base text-neutral-300 font-light overflow-hidden transition-all mt-2">
            <h3 className="font-semibold">What I did:</h3>
            <ul className={`text-neutral-300 font-light list-disc pl-4`}>
                {
                    experience.activities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))
                }
            </ul>
        </div>
        <div className='my-4 w-[90%] h-[1px] bg-white/30 self-center'></div>
        <section className='flex flex-wrap justify-start gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2 select-none'>
            {
                experience.skills.map((skill, index) => (
                    <span key={index} className="text-xs text-neutral-300 border border-white/40 px-2 py-1 rounded-xs lowercase">
                        {skill}
                    </span>
                   /*
                   <Icon key={index} name={iconMap[skill.toLowerCase() as keyof typeof iconMap]} className="w-6 h-6 md:w-8 md:h-8" />
                   */
                ))
            }
        </section>
    </motion.div>
  )
}