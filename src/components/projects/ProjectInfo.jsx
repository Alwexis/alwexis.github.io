import Icon from "../Icon";
import Tooltip from "../Tooltip";
import { useState } from "react";

export default function ProjectInfo({ project, onProjectExpand }) {

    const [expandedProject, setExpandedProject] = useState("");

    const handleClick = () => {
        onProjectExpand();
    };

    return (
        <div className={`${expandedProject ? 'bg-neutral-800' : 'bg-neutral-900'} flex flex-col text-neutral-200 hover:bg-neutral-800 transition-all rounded-sm h-fit my-0.5 px-4 py-2 cursor-pointer`}>
            <section onClick={() => setExpandedProject(!expandedProject)} className="w-full flex items-center justify-between">
                <h1 className="font-inter tracking-widest my-2">{project.name}</h1>
                {
                    expandedProject ?
                    <Icon className="ml-2 w-4" icon="arrow-down" />
                    :
                    <Icon className="ml-2 w-4" icon="arrow-right" />
                }
            </section>
            <section onClick={() => setExpandedProject(!expandedProject)} className={`${expandedProject ? 'max-h-96' : 'max-h-0'} w-full flex flex-col overflow-hidden transition-all duration-500`}>
                <div className={`${expandedProject ? 'bg-neutral-900' : 'bg-neutral-800'} w-[90%] h-[1px] mt-2 self-center`}></div>
                <p className="my-2 text-neutral-300 font-inter text-sm overflow-y-auto whitespace-pre-line">{project.description}</p>
                <div className={`${expandedProject ? 'bg-neutral-900' : 'bg-neutral-800'} w-[90%] h-[1px] mt-1 self-center`}></div>
            </section>
            <section onClick={() => setExpandedProject(!expandedProject)} className="grid grid-cols-6 md:grid-cols-12 gap-1 md:gap-0.5 my-2">
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
            <section className="my-2 flex space-x-2">
                <a href={project.repository} target="_blank">
                    <div className="flex items-center text-xs border border-neutral-600 hover:bg-neutral-700 w-fit px-2 py-1 rounded-sm transition-all">
                        <Icon className="w-4" icon="github" />
                        <span className="ml-1.5 font-fira-code">Repository</span>
                    </div>
                </a>
                {
                    project.url && project.url != '' &&
                    <a href={project.url} target="_blank">
                        <div className="flex items-center text-xs border border-neutral-600 hover:bg-neutral-700 w-fit px-2 py-1 rounded-sm transition-all">
                            <Icon className="w-4" icon="url" />
                            <span className="ml-1.5 font-fira-code">Live demo</span>
                        </div>
                    </a>
                }
            </section>
        </div>
    );
}
