import ProjectInfo from "./ProjectInfo";

export default function Stack({ projects }) {

    return (
        <div className="flex flex-col">
            <h2 className="font-bold font-nunito-sans tracking-widest text-neutral-100 text-2xl">
                My Projects
            </h2>
            <section className="grid gap-2 md:grid-cols-2 my-2">
                {projects.map((project) => (
                    <ProjectInfo
                        key={project.id}
                        project={project.data}
                    />
                ))}
            </section>
        </div>
    );
}
