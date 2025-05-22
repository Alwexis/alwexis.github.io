import About from "@/components/content/about/About";
import Work from "@/components/content/work/Work";
import Experience from "@/components/content/experience/Experience";
import Social from "@/components/ui/Social";
import CV from "@/components/content/cv/CV";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className='flex flex-col items-center h-full w-full space-y-12 xl:space-y-32 pb-12 text-neutral-100 overflow-y-auto scheme-dark px-8'>
      <Navbar />

      <Social />
      <About />
      <Work />
      <Experience />
      <CV />
    </main>
  );
}
