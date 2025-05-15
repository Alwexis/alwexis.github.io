import { geistMono, spaceGrotesk } from "@/lib/fonts";
import Link from "next/link";
import { Suspense } from "react";
import ExperienceWrapperSkeleton from "./ExperienceWrapperSkeleton";
import ExperienceWrapper from "./ExperienceWrapper";

export default async function Experience() {

  return (
    <section id="experience" className="max-w-xs md:max-w-2xl w-full h-fit">
      <h2 className={`text-3xl ${spaceGrotesk.className} text-neutral-100 animate-fade-down`}>Experience</h2>
      <Suspense fallback={<ExperienceWrapperSkeleton />}>
        <ExperienceWrapper amount={3} />
      </Suspense>
      <Link href="/experience">
        <button type="button" className={`font-semibold text-neutral-100 hover:text-neutral-300 transition-all cursor-pointer animate-fade-down w-full py-2 ${geistMono.className} corner-border-animated`}>
          View all experiences
        </button>
      </Link>
    </section>
  )
}