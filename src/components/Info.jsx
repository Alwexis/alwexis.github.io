import Navbar from "./Navbar";
import About from "./About";
import Works from "./works/Works";
import Experience from "./experience/Experience";
import CV from "./CV";

export default function Info({ animationVisible }) {
    return (
        <section
            className={`${
                animationVisible ? "flex" : "hidden"
            } flex-col w-full h-full items-center justify-center animate-fade animate-duration-1000 md:relative`}
        >
            <Navbar />
            <main
                id="info"
                className="flex flex-col items-center space-y-32 h-full w-full py-16 md:py-20 text-neutral-100 overflow-y-auto animate-fade-down scheme-dark"
            >
                <About />
                <Works />
                <Experience />
                <CV />
            </main>
        </section>
    );
}
