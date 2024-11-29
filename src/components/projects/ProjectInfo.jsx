import Icon from "../Icon";
import Tooltip from "../Tooltip";
import { useState } from "react";

export default function ProjectInfo({ project, onProjectExpand }) {

    const [expandedProject, setExpandedProject] = useState("");

    const handleClick = () => {
        onProjectExpand();
    };

    return (
        <div onClick={() => setExpandedProject(!expandedProject)} className={`${expandedProject ? 'bg-neutral-800' : 'bg-neutral-900'} flex flex-col text-neutral-200 hover:bg-neutral-800 transition-all rounded-sm h-fit my-0.5 px-4 py-2 cursor-pointer`}>
            <h1 className="font-inter font-semibold tracking-widest my-2 text-neutral-200">{project.name}</h1>
            <section className={`${expandedProject ? 'max-h-96' : 'max-h-0'} w-full flex flex-col overflow-hidden transition-all duration-500`}>
                <div className={`${expandedProject ? 'bg-neutral-900' : 'bg-neutral-800'} w-[90%] h-[1px] mt-2 self-center`}></div>
                <p className="my-2 text-neutral-400 font-inter text-sm overflow-y-auto whitespace-pre-line">{project.description}</p>
                <div className={`${expandedProject ? 'bg-neutral-900' : 'bg-neutral-800'} w-[90%] h-[1px] mt-1 self-center`}></div>
            </section>
            <section className="grid grid-cols-6 md:grid-cols-12 gap-1 md:gap-0.5 my-2">
                {
                    project.technologies.map((tech) => {
                        const randId = Math.floor(Math.random() * 1000);
                        return (
                            <div key={`${randId}-${tech.name}`}>
                                <Tooltip classNames="w-6 h-6" message={tech.name}>
                                    <Icon
                                        icon={tech.icon}
                                        name={tech.name}
                                        className="w-6 h-6 md:w-5 md:h-5"
                                    />
                                </Tooltip>
                            </div>
                            
                        );
                    })
                }
            </section>
        </div>
    );
}
