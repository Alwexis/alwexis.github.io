import { useState } from "react";

export default function WorkCard(data, idx) {
    const [readMore, setReadMore] = useState(false);
    const handleReadMore = () => {
        setReadMore(!readMore);
    }

    return (
        <div className={`w-full flex flex-col py-4 px-6 bg-neutral-200/25 rounded-sm border border-neutral-200 my-2.5 animate-fade-down animate-delay-[${(data.priority + 1) * 200}ms]`}>
            <h2 className="font-bold">{data.name}</h2>
            <section className="flex flex-col items-start justify-between">
                <p className={`text-sm overflow-y-hidden text-ellipsis h-fit ${readMore ? 'max-h-screen' : 'max-h-10'} transition-all duration-500`}>{data.description}</p>
                <div className="mt-4 md:mt-0 md:space-x-0 md:flex-col items-end text-sm">
                    <span onClick={handleReadMore} className="flex flex-col font-semibold w-fit cursor-pointer after:max-w-0 hover:text-neutral-600 hover:after:max-w-full after:w-full after:bg-neutral-600 after:h-0.5 after:transition-all after:duration-500">
                        { readMore ? 'Read Less' : 'Read More' }
                    </span>
                </div>
            </section>
            <section className="mt-1 mb-2 flex">
                {
                    data.urls.map(url => (
                        <a href={url.url} target="_blank" key={`${data.name}_${url.title}`}
                            className="inline-block px-2 py-1 rounded-sm text-xs border border-neutral-300 mr-2 my-0.5 hover:bg-neutral-200 transition-all capitalize">
                                <span className="flex items-start">
                                    {url.title}
                                    <svg className="w-2.5 h-2.5 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"/></svg>
                                </span>
                        </a>
                    ))
                }
            </section>
            <div className="w-[90%] self-center bg-neutral-200 h-0.5 my-2.5" />
            <section>
                {
                    data.technologies.map(tech => (
                        <span key={`${data.name}_${tech.name}`}
                            className="inline-block font-mono px-2 py-1 rounded-sm text-xs border border-neutral-300 mr-2 my-0.5">
                            {tech.name}
                        </span>
                    ))
                }
            </section>
        </div>
    );
}