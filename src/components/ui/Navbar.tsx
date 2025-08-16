'use client';

import { useEffect, useState } from "react";
import clsx from 'clsx';
import { motion } from "framer-motion";

export default function Navbar() {
  const [selected, setSelected] = useState<string>('');

  const handleChange = (item: string) => {
    if (selected === item) return;
    setSelected(item);
    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    }, { rootMargin: '0px 0px -60% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="xl:h-full w-full xl:w-fit z-10 flex lg:space-x-12 xl:flex-col items-center xl:items-start justify-center text-neutral-100 absolute top-0 lg:left-0 py-6 md:py-8 xl:py-6 px-8 bg-gradient-to-b from-black from-75% via-black via-75% to-black/10 to-100% xl:from-transparent xl:via-transparent xl:to-transparent">
      <div
        className="h-full w-full lg:max-w-xl xl:w-fit flex justify-between xl:flex-col xl:justify-center xl:space-y-2 text-sm md:text-lg">
        {["about", "work", "experience", "cv"].map((item, i) => (
          <motion.span
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0, transition: { delay: i * 0.25, ease: 'linear' } }}
            key={`navigate-to-${item}`}
            aria-label={`Navigate to ${item}`}
            role="navigation"
            onClick={() => handleChange(item)}
            className={
              clsx(
                'cursor-pointer flex flex-col w-fit hover:text-neutral-100 transition-colors',
                {
                  'text-neutral-100': selected === item,
                  'text-neutral-400': selected !== item
                }
              )
            }
          >
            {item}
          </motion.span>
        ))}
      </div>
    </nav>
  )
}