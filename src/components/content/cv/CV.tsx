'use client';

import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CV() {
  const [selected, setSelected] = useState("EN");

  const handleChange = (item: string) => {
    if (selected === item) return;
    setSelected(item);
  };

  return (
    <section id="cv" className="w-full max-w-xs lg:max-w-2xl xl:max-w-3xl h-fit xl:flex xl:flex-col xl:items-start xl:justify-center animate-fade py-32">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} className="text-3xl md:text-5xl xl:text-4xl text-neutral-100 font-bold">
        cv.
      </motion.h2>
      <p className="whitespace-pre-line text-neutral-300 md:text-2xl md:px-8 xl:text-2xl space-y-6 my-2">
        choose an option from below to see my CV
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-4 my-4 md:px-8 animate-fade-down">
        <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} type="button" onClick={() => handleChange('EN')}
          className={clsx(
            'hidden md:block border transition-all duration-200 w-full md:w-fit px-16 py-2 md:text-2xl xl:text-xl cursor-pointer',
            {
              'border-white': selected === 'EN',
              'border-white/30': selected !== 'EN'
            }
          )}
        >
          english
        </motion.button>
        <a className="md:hidden w-full" href="/CV Ariel Silva - EN.pdf" target="_blank" rel="noreferrer">
          <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} type="button" className="text-neutral-200 hover:text-neutral-300 transition-all cursor-pointer w-full py-2 border border-white/30 md:text-xl xl:text-2xl">
            english
          </motion.button>
        </a>
        <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} type="button" onClick={() => handleChange('ES')}
          className={clsx(
            'hidden md:block border transition-all duration-200 w-full md:w-fit px-16 py-2 md:text-2xl xl:text-xl cursor-pointer',
            {
              'border-white': selected === 'ES',
              'border-white/30': selected !== 'ES'
            }
          )}
        >
          español
        </motion.button>
        <a className="md:hidden w-full" href="/CV Ariel Silva - ES.pdf" target="_blank" rel="noreferrer">
          <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }} type="button" className="text-neutral-200 hover:text-neutral-300 transition-all cursor-pointer w-full py-2 border border-white/30 md:text-xl xl:text-2xl">
            spanish
          </motion.button>
        </a>
      </div>
      <embed className="hidden md:block w-full h-96 border-none xl:aspect-[1/2] md:px-8" type="application/pdf" title={`CV Ariel Silva ${selected}`} aria-label={`CV PDF en ${selected === 'EN' ? 'inglés' : 'español'}`} src={`/CV Ariel Silva - ${selected}.pdf`} />
    </section>
  )
}