import WorkWrapper from "@components/content/work/WorkWrapper";
import WorkWrapperSkeleton from "@components/content/work/WorkWrapperSkeleton";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex justify-center h-full w-full py-12 md:py-20 text-neutral-100 overflow-y-auto scheme-dark px-8">
      <section className="max-w-xs md:max-w-2xl w-full h-fit">
        <Link href="/">
          <button type="button" className="text-neutral-100 hover:text-neutral-300 transition-all cursor-pointer text-sm">
            {'⇽ '} back
          </button>
        </Link>
        <h2 className="text-3xl text-neutral-100 mt-2">
          Works
        </h2>
        <Suspense fallback={<WorkWrapperSkeleton />}>
          <WorkWrapper extended={true} />
        </Suspense>
      </section>
    </main>
  );
}
