import { geistMono, spaceGrotesk } from "@/lib/fonts";
import Link from "next/link";
import { Suspense } from "react";
import ExperienceWrapperSkeleton from "./ExperienceWrapperSkeleton";
import ExperienceWrapper from "./ExperienceWrapper";

export default async function Experience() {

  return (
    <section id="experience" className="w-full max-w-xs lg:max-w-2xl xl:max-w-3xl h-fit xl:flex xl:flex-col xl:items-start xl:justify-center animate-fade py-8">
      <h2 className={`text-3xl md:text-5xl xl:text-4xl ${spaceGrotesk.className} text-neutral-100`}>Experience</h2>
      <Suspense fallback={<ExperienceWrapperSkeleton />}>
        <ExperienceWrapper amount={3} />
      </Suspense>
      <Link href="/experience" className="w-full">
        <button type="button" className={`font-semibold text-neutral-100 hover:text-neutral-300 transition-all cursor-pointer animate-fade-down w-full py-2 ${geistMono.className} corner-border-animated md:text-xl xl:text-2xl`}>
          View all experiences
        </button>
      </Link>
    </section>
  )
}