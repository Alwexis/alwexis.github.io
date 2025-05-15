'use client';

import clsx from "clsx";
import { useState } from "react";

export default function CV() {
  const [selected, setSelected] = useState("EN");

  const handleChange = (item: string) => {
    if (selected === item) return;
    setSelected(item);
  };

  return (
    <section id="cv" className="max-w-xs md:max-w-2xl w-full h-fit">
      <h2 className="text-3xl font-space-grotesk text-neutral-100 animate-fade-down">
        CV
      </h2>
      <p className="font-geist">Choose an option from below to see my CV</p>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 my-4 animate-fade-down font-geist-mono">
        <button type="button" onClick={() => handleChange('EN')}
          className={clsx(
            'corner-border-animated transition-all duration-200 w-full md:w-fit px-16 py-2 cursor-pointer',
            {
              'active': selected === 'EN',
            }
          )}
        >
          English
        </button>
        <button type="button" onClick={() => handleChange('ES')}
          className={clsx(
            'corner-border-animated transition-all duration-200 w-full md:w-fit px-16 py-2 cursor-pointer',
            {
              'active': selected === 'ES',
            }
          )}
        >
          Español
        </button>
      </div>
      <embed className="w-full h-96 border-none" type="application/pdf" title={`CV Ariel Silva ${selected}`} aria-label={`CV PDF en ${selected === 'EN' ? 'inglés' : 'español'}`} src={`/CV Ariel Silva - ${selected}.pdf`} />
    </section>
  )
}