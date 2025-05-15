import About from "@/components/content/about/About";
import Work from "@/components/content/work/Work";
import Experience from "@/components/content/experience/Experience";
import Social from "@/components/ui/Social";
import CV from "@/components/content/cv/CV";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className='flex flex-col items-center space-y-32 h-full w-full pb-12 md:py-20 text-neutral-100 overflow-y-auto scheme-dark px-8'>
      <Navbar />

      <Social />
      <About />
      <Work />
      <Experience />
      <CV />
    </main>
  );
}
