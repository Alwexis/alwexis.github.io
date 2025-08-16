import Link from "next/link";
import { Suspense } from "react";
import WorkWrapper from "./WorkWrapper";
import WorkWrapperSkeleton from "./WorkWrapperSkeleton";
import * as motion from "motion/react-client";

export default async function Work() {
  return (
    <section id="work" className="w-full max-w-xs lg:max-w-2xl xl:max-w-3xl h-fit xl:flex xl:flex-col xl:items-start xl:justify-center animate-fade py-8">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} className="text-3xl md:text-5xl xl:text-4xl text-neutral-100 font-bold">
        work.
      </motion.h2>
      <Suspense fallback={<WorkWrapperSkeleton />}>
        <WorkWrapper amount={3} />
      </Suspense>
      <Link href="/projects" className="w-full">
        <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} type="button" className="text-neutral-200 hover:text-neutral-300 transition-all cursor-pointer w-full py-2 border border-white/30 md:text-xl xl:text-2xl">
          all projects
        </motion.button>
      </Link>
    </section>
  )
}