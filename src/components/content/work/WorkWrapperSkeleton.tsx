export default function WorkWrapperSkeleton() {
  return (
    <div className="grid grid-cols-1 space-y-6 my-4">
      {[0, 1, 2].map((_, i) => (
        <div key={i} className="corner-border px-8 py-8 h-fit w-full flex flex-col animate-pulse">
          <div className="h-7 bg-neutral-700 rounded w-2/3"></div>
        <div className="h-4 bg-neutral-700 rounded w-full mt-2"></div>
        <div className="h-4 bg-neutral-700 rounded w-1/4 mt-2"></div>

        <section className="flex items-center space-x-2 my-2">
          <div className="h-8 bg-neutral-700 rounded w-24"></div>
          <div className="h-8 bg-neutral-700 rounded w-24"></div>
        </section>

        <div className='my-2.5 w-2/3 h-[1px] bg-neutral-700 self-center'></div>

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