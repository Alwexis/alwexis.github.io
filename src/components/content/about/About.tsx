import { geistSans, spaceGrotesk } from "@/lib/fonts";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-xs lg:max-w-2xl xl:max-w-3xl xl:min-h-dvh xl:flex xl:flex-col xl:items-start xl:justify-center animate-fade py-8"
    >
      <h2 className={`text-3xl md:text-5xl xl:text-4xl ${spaceGrotesk.className} text-neutral-100`}>
        About
      </h2>
      <div className={`whitespace-pre-line text-neutral-300 md:text-3xl xl:text-2xl ${geistSans.className} space-y-6 my-2`}>
        <p>
          My name is Ariel Silva and I&apos;m a recently graduated Computer Engineer passionate about
          innovation and continuous learning.
        </p>
        <p>
          I&apos;m commited to delivering efficient technological solutions and
          with the ability to adapt quickly to new scenarios, technologies
          and challenges.
        </p>
        <p>
          I have experience in <strong>Fullstack development</strong>,
          <strong> Mobile development</strong>, and practical experience in
          <strong> Machine Learning/Deep Learning</strong> and
          <strong> Data Science</strong>.
        </p>
      </div>
    </section>
  )
}