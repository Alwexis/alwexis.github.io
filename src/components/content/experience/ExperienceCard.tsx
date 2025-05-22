import { Icon, iconMap } from "@/components/ui/Icon"
import { Experience } from "@/lib/notion/types"
import { geistSans, spaceGrotesk } from "@/lib/fonts"

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const start_date = new Date(experience.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  const end_date = new Date(experience.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

  return (
    <div className="corner-border px-8 py-8 h-fit w-full flex flex-col animate-fade">
        <a href={experience.company.url} title={`${experience.company.name}'s website`} target='_blank'
          className={`flex flex-col md:flex-row md:items-center space-x-2 text-xl md:text-3xl font-semibold ${spaceGrotesk.className} text-neutral-100`}>
            <h4>{experience.name}</h4>
            <span className='hidden md:block'>-</span>
            <h3 className="font-normal text-lg md:text-xl flex items-start">
                {experience.company.name}
                <svg className='w-3 h-3 ml-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3z"/></svg>
            </h3>
        </a>
        <div
          className={`flex flex-col md:flex-row md:items-center justify-between text-neutral-200 text-sm md:text-xl ${geistSans.className} my-2`}>
            <span>{start_date} - {end_date}</span>
            <span>{experience.location}</span>
        </div>
        <p className={`md:text-2xl text-neutral-300 ${geistSans.className} font-light overflow-hidden transition-all md:my-2`}>
            {experience.description}
        </p>
        <div className={`md:text-2xl text-neutral-300 ${geistSans.className} font-light overflow-hidden transition-all md:my-2`}>
            <h3 className="font-semibold">What I did:</h3>
            <ul className={`text-neutral-300 ${geistSans.className} md:text-xl font-light list-disc pl-4`}>
                {
                    experience.activities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))
                }
            </ul>
        </div>
        <div className='my-4 w-2/3 h-[1px] bg-neutral-200 self-center'></div>
        <section className='flex flex-wrap justify-center md:justify-start gap-x-4 space-y-2.5 select-none py-2.5'>
            {
                experience.skills.map((skill, index) => (
                    /*
                    <span key={index} className="text-xs font-geist-mono text-neutral-200 border border-neutral-300 px-2 py-1 rounded-xs my-0.5">
                        {skill.name}
                    </span>
                    */
                   <Icon key={index} name={iconMap[skill.toLowerCase() as keyof typeof iconMap]} className="w-6 h-6 md:w-8 md:h-8" />
                ))
            }
        </section>
    </div>
  )
}