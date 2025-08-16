"use client";

import { Project } from "@lib/types";
import { motion } from "framer-motion";

type WorkCardProps = {
  work: Project;
  extended?: boolean;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}  className="h-fit w-full flex flex-col">
      <h3 className="md:text-xl font-semibold text-neutral-100">
        {work.name}
      </h3>
      <p className="text-sm md:text-base text-neutral-200 font-light overflow-hidden transition-all mt-2">
        {work.short_description}
      </p>
      <section className="flex items-center justify-start space-x-2 md:space-x-6 my-2 select-none">
        <a href={work.repository} title="Github Repository" target="_blank" rel="noreferrer"
          className="inline-block px-2 md:px-2.5 py-1 text-sm border border-white/40 my-0.5 transition-all capitalize hover:bg-neutral-900">
          <button type="button" className='flex items-start cursor-pointer'>
            repository
            <svg className='w-2.5 h-2.5 ml-0.5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3z" /></svg>
          </button>
        </a>
        {work.demo && (
          <a href={work.demo} title="Live Demo" target="_blank" rel="noreferrer"
            className="inline-block px-2 md:px-2.5 py-1 text-sm border border-white/40 my-0.5 transition-all capitalize hover:bg-neutral-900">
            <button type="button" className='flex items-start cursor-pointer'>
              live demo
              <svg className='w-2.5 h-2.5 ml-0.5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3z" /></svg>
            </button>
          </a>
        )}
      </section>
      <div className='my-4 w-[90%] h-[1px] bg-white/30 self-center'></div>
      <section className='flex flex-wrap justify-start gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2 select-none'>
        {
          work.stack.map((tech) => (
            <span key={tech} className="text-xs text-neutral-300 border border-white/40 px-2 py-1 rounded-xs lowercase">
              {tech}
            </span>
            /*
           <Icon key={index} name={iconMap[tech.toLowerCase() as keyof typeof iconMap]} className="w-6 h-6 md:w-8 md:h-8" />
           */
          ))
        }
      </section>
    </motion.div>
  )
}