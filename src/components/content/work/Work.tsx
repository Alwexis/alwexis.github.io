import Link from "next/link";
import { geistMono, spaceGrotesk } from "@/lib/fonts";
import { Suspense } from "react";
import WorkWrapper from "./WorkWrapper";
import WorkWrapperSkeleton from "./WorkWrapperSkeleton";

export default async function Work() {
  return (
    <section id="work" className="max-w-xs md:max-w-2xl w-full h-fit">
      <h2 className={`text-3xl ${spaceGrotesk.className} text-neutral-100`}>Works</h2>
      <Suspense fallback={<WorkWrapperSkeleton />}>
        <WorkWrapper amount={3} />
      </Suspense>
      <Link href="/projects">
        <button type="button" className={`font-semibold text-neutral-100 hover:text-neutral-300 transition-all cursor-pointer animate-fade-down w-full py-2 ${geistMono.className} corner-border-animated`}>
          View all projects
        </button>
      </Link>
    </section>
  )
}