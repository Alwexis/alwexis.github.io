import experiences from '../../data/experience.json';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
    return (
        <section id="experience" className="max-w-xs md:max-w-2xl w-full h-fit">
            <h2 className="text-4xl font-space-grotesk text-neutral-100 animate-fade-down">Experience</h2>
            <div className="grid grid-rows-2 grid-cols-1 space-y-6 my-4 animate-fade-down">
                {
                    experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))
                }
            </div>
        </section>
    );
}
