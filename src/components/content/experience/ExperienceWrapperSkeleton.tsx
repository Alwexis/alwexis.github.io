import { geistSans, spaceGrotesk } from "@/lib/fonts"

export default function ExperienceWrapperSkeleton() {
  return (
    <div className="grid grid-cols-1 space-y-8 my-4 animate-fade-down">
      {[1, 2, 3].map((v, i) => (
        <div key={i} className="corner-border px-8 py-8 h-fit w-full flex flex-col animate-pulse">
        <div className={`flex flex-col md:flex-row md:items-center space-x-2 text-lg md:text-xl ${spaceGrotesk.className}`}>
          <div className="h-6 bg-neutral-700 rounded w-1/3"></div>
          <div className="h-6 bg-neutral-700 rounded w-1/4"></div>
        </div>
        <div className={`flex flex-col md:flex-row md:items-center justify-between ${geistSans.className} my-2`}>
          <div className="h-4 bg-neutral-700 rounded w-1/4"></div>
          <div className="h-4 bg-neutral-700 rounded w-1/4"></div>
        </div>
        <div className="h-4 bg-neutral-700 rounded w-full mb-2"></div>
        <div>
          <div className="h-5 bg-neutral-700 rounded w-1/4 mb-2"></div>
          <ul className={`${geistSans.className} space-y-2`}>
            {[1, 2, 3].map((_, index) => (
              <li key={index} className="h-4 bg-neutral-700 rounded w-full"></li>
            ))}
          </ul>
        </div>
        <div className='my-4 w-2/3 h-[1px] bg-neutral-700 self-center'></div>
        <section className='flex flex-wrap space-x-4 space-y-2.5 select-none py-2.5'>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="w-6 h-6 bg-neutral-700 rounded"></div>
          ))}
          </section>
        </div>
      ))}
    </div>
  )
}