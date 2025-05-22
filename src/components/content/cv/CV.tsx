'use client';

import { geistSans, spaceGrotesk } from "@/lib/fonts";
import clsx from "clsx";
import { useState } from "react";

export default function CV() {
  const [selected, setSelected] = useState("EN");

  const handleChange = (item: string) => {
    if (selected === item) return;
    setSelected(item);
  };

  return (
    <section id="cv" className="w-full max-w-xs lg:max-w-2xl xl:max-w-3xl h-fit xl:flex xl:flex-col xl:items-start xl:justify-center animate-fade py-8">
      <h2 className={`text-3xl md:text-5xl xl:text-4xl ${spaceGrotesk.className} text-neutral-100`}>
        CV
      </h2>
      <p className={`whitespace-pre-line text-neutral-300 md:text-2xl xl:text-2xl ${geistSans.className} space-y-6 my-2`}>Choose an option from below to see my CV</p>
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-4 my-4 animate-fade-down font-geist-mono">
        <button type="button" onClick={() => handleChange('EN')}
          className={clsx(
            'hidden md:block corner-border-animated transition-all duration-200 w-full md:w-fit px-16 py-2 md:text-2xl xl:text-xl cursor-pointer',
            {
              'active': selected === 'EN',
            }
          )}
        >
          English
        </button>
        <a className="md:hidden w-full" href="/CV Ariel Silva - EN.pdf" target="_blank" rel="noreferrer">
          <button type="button"
            className={clsx(
              'corner-border-animated transition-all duration-200 w-full px-16 py-2 cursor-pointer',
            )}
          >
            English
          </button>
        </a>
        <button type="button" onClick={() => handleChange('ES')}
          className={clsx(
            'hidden md:block corner-border-animated transition-all duration-200 w-full md:w-fit px-16 py-2 md:text-2xl xl:text-xl cursor-pointer',
            {
              'active': selected === 'ES',
            }
          )}
        >
          Español
        </button>
        <a className="md:hidden w-full" href="/CV Ariel Silva - ES.pdf" target="_blank" rel="noreferrer">
          <button type="button"
            className={clsx(
              'corner-border-animated transition-all duration-200 w-full px-16 py-2 cursor-pointer',
            )}
          >
            Español
          </button>
        </a>
      </div>
      <embed className="hidden md:block w-full h-96 border-none xl:aspect-[1/2]" type="application/pdf" title={`CV Ariel Silva ${selected}`} aria-label={`CV PDF en ${selected === 'EN' ? 'inglés' : 'español'}`} src={`/CV Ariel Silva - ${selected}.pdf`} />
    </section>
  )
}