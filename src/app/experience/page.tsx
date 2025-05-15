import ExperienceWrapper from "@/components/content/experience/ExperienceWrapper";
import ExperienceWrapperSkeleton from "@/components/content/experience/ExperienceWrapperSkeleton";
import { geistMono, spaceGrotesk } from "@/lib/fonts";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex justify-center h-full w-full py-12 md:py-20 text-neutral-100 overflow-y-auto scheme-dark px-8">
      <section className="max-w-xs md:max-w-2xl w-full h-fit">
        <Link href="/">
          <button type="button" className={`${geistMono.className} text-neutral-100 hover:text-neutral-300 transition-all cursor-pointer text-sm`}>
            {'<- '} Back
          </button>
        </Link>
        <h2 className={`text-3xl ${spaceGrotesk.className} text-neutral-100 mt-2`}>
          Experience
        </h2>
        <Suspense fallback={<ExperienceWrapperSkeleton />}>
          <ExperienceWrapper />
        </Suspense>
      </section>
    </main>
  );
}
