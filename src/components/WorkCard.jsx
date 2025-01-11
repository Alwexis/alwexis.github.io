import { useState } from "react";

export default function WorkCard(data) {
    const [readMore, setReadMore] = useState(false);
    const handleReadMore = () => {
        setReadMore(!readMore);
    }

    return (
        <div className="w-full flex flex-col py-4 px-6 bg-neutral-200/50 rounded-sm border border-neutral-50">
            <h2 className="font-bold">{data.name}</h2>
            <section className="flex flex-col md:flex-row items-start justify-between">
                <p className={`md:w-2/3 text-sm overflow-y-hidden text-ellipsis h-fit ${readMore ? 'max-h-screen' : 'max-h-10'} transition-all duration-500`}>{data.description}</p>
                <div className="md:w-1/3 flex flex-row space-x-8 mt-4 md:mt-0 md:space-x-0 md:flex-col items-end text-sm">
                    <span className="flex flex-col font-semibold w-fit cursor-pointer after:max-w-0 hover:text-neutral-600 hover:after:max-w-full after:w-full after:bg-neutral-600 after:h-0.5 after:transition-all after:duration-500">Gallery</span>
                    <span onClick={handleReadMore} className="flex flex-col font-semibold w-fit cursor-pointer after:max-w-0 hover:text-neutral-600 hover:after:max-w-full after:w-full after:bg-neutral-600 after:h-0.5 after:transition-all after:duration-500">Read more</span>
                </div>
            </section>
            <section className="mt-1 mb-2">
                {
                    data.urls.map(url => (
                        <a href={url.url} target="_blank" key={`${data.name}_${url.title}`}
                            className="inline-block px-2 py-1 rounded-sm text-xs border border-neutral-300 mr-2 my-0.5 hover:bg-neutral-200 transition-all capitalize">
                            {url.title}
                        </a>
                    ))
                }
            </section>
            <div className="w-[90%] self-center bg-neutral-200 h-0.5 my-2" />
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