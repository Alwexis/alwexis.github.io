import { useState } from 'react';

export default function WorkCard({ work }) {
    const [ showMore, setShowMore ] = useState(false);

    return (
        <div className="colored-corners-1 px-8 py-8 h-fit w-full flex flex-col animate-fade-down">
            <h3 className="text-xl font-semibold font-space-grotesk text-neutral-100">{work.name}</h3>
            <p className={`text-neutral-300 font-geist font-light overflow-hidden transition-all ${showMore ? '' : 'whitespace-nowrap text-ellipsis'}`}>
                {work.description}
            </p>
            <button type="button" onClick={() => setShowMore(!showMore)} className="font-semibold text-neutral-100 hover:text-neutral-300 transition-all cursor-pointer w-fit">
                { showMore ? 'Read less...' : 'Read more...' }
            </button>
            {
                work.urls.length > 0 && (
                    <section className="flex space-x-2 my-2 select-none">
                        {
                            work.urls.map((url, index) => (
                                <a key={index} href={url.url} target="_blank" rel="noreferrer" className="inline-block px-1.5 py-1 rounded-xs text-xs border border-neutral-300 my-0.5 transition-all capitalize font-geist hover:bg-neutral-900">
                                    <span className='flex items-start'>
                                        {url.title}
                                        <svg className='w-2.5 h-2.5 ml-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3z"/></svg>
                                    </span>
                                </a>
                            ))
                        }
                    </section>
                )
            }
            <div className='my-2.5 w-2/3 h-[1px] bg-neutral-200 self-center'></div>
            <section className='flex flex-wrap space-x-2 select-none'>
                {
                    work.technologies.map((tech, index) => (
                        <span key={index} className="text-xs font-geist-mono text-neutral-200 border border-neutral-300 px-2 py-1 rounded-xs my-0.5">
                            {tech.name}
                        </span>
                    ))
                }
            </section>
        </div>
    );
}