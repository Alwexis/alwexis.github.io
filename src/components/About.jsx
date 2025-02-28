export default function About() {
    return (
        <section id="about" className="w-full max-w-xs md:max-w-2xl animate-fade-down">
            <h2 className="text-4xl font-space-grotesk text-neutral-100">About</h2>
            <p id="about" className="whitespace-pre-line text-neutral-200 md:text-2xl font-space-grotesk">
                I'm a recently graduated Computer Engineer passionate about
                innovation and continuous learning.
                {'\n'}{'\n'}
                I'm commited to delivering efficient technological solutions and with the ability to adapt
                quickly to new scenarios, technologies and challenges.
                {'\n'}{'\n'}
                I have experience in <b className="text-neutral-50">Fullstack development</b>, <b className="text-neutral-50">Mobile development</b>, and some in <b className="text-neutral-50">Machine Learning/Deep Learning</b> and <b className="text-neutral-50">Data Science</b>.
            </p>
        </section>
    );
}
