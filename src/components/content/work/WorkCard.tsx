import { Icon, iconMap } from "@/components/ui/Icon";
import { Project } from "@/lib/notion/types";
import { geistSans, spaceGrotesk } from "@/lib/fonts";
import Link from "next/link";

type WorkCardProps = {
  work: Project;
  extended?: boolean;
}

export default function WorkCard({ work, extended = false }: WorkCardProps) {
  return (
    <div className="corner-border px-8 py-8 h-fit w-full flex flex-col animate-fade">
      <h3
        className={`text-xl font-semibold ${spaceGrotesk.className} text-neutral-100`}
      >
        {work.name}
      </h3>
      <p className={`text-neutral-300 ${geistSans.className} font-light overflow-hidden transition-all`}>
        {extended ? work.description : work.short_description}
      </p>
      <section className="flex items-center justify-between md:justify-start space-x-2 my-2 select-none">
        <a href={work.repository} title="Github Repository" target="_blank" rel="noreferrer"
          className={`inline-block px-2.5 py-1 text-sm border border-neutral-300 my-0.5 transition-all capitalize ${geistSans.className} hover:bg-neutral-900`}>
          <button type="button" className='flex items-start cursor-pointer'>
            Repository
            <svg className='w-2.5 h-2.5 ml-0.5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3z" /></svg>
          </button>
        </a>
        {work.demo && (
          <a href={work.demo} title="Live Demo" target="_blank" rel="noreferrer"
            className={`inline-block px-2.5 py-1 text-sm border border-neutral-300 my-0.5 transition-all capitalize ${geistSans.className} hover:bg-neutral-900`}>
            <button type="button" className='flex items-start cursor-pointer'>
              Live Demo
              <svg className='w-2.5 h-2.5 ml-0.5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3z" /></svg>
            </button>
          </a>
        )}
      </section>
      <div className='my-2.5 w-2/3 h-[1px] bg-neutral-200 self-center'></div>
      <section className='flex flex-wrap space-x-4 space-y-2.5 select-none py-2.5'>
        {
          work.stack.map((tech, index) => (
            /*
            <span key={index} className="text-xs font-geist-mono text-neutral-200 border border-neutral-300 px-2 py-1 rounded-xs my-0.5">
              {tech}
            </span>
            */
           <Icon key={index} name={iconMap[tech.toLowerCase() as keyof typeof iconMap]} />
          ))
        }
      </section>
    </div>
  )
}