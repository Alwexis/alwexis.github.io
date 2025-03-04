import { useState } from "react";

export default function CV() {
    const [selected, setSelected] = useState("EN");
    
    return (
        <section id="cv" className="max-w-xs md:max-w-2xl w-full h-fit">
            <h2 className="text-4xl font-space-grotesk text-neutral-100 animate-fade-down">
                CV
            </h2>
            <p className="font-geist">Choose an option from below to see my CV</p>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 my-4 animate-fade-down font-geist-mono">
                <button type="button" onClick={() => { setSelected('EN') }} className={`colored-corners transition-all duration-200 w-full md:w-fit px-16 py-2 cursor-pointer ${selected === 'EN' ? 'active' : ''}`}>
                    English
                </button>
                <button type="button" onClick={() => { setSelected('ES') }} className={`colored-corners transition-all duration-200 w-full md:w-fit px-16 py-2 cursor-pointer ${selected === 'ES' ? 'active' : ''}`}>
                    Español
                </button>
            </div>
            <iframe className="w-full h-96" src={`cv/CV Ariel Silva - ${selected}.pdf`}></iframe>
        </section>
    );
}
