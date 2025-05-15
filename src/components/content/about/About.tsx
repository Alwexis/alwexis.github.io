import { geistSans, spaceGrotesk } from "@/lib/fonts";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-xs md:max-w-2xl animate-fade py-8"
    >
      <h2 className={`text-3xl ${spaceGrotesk.className} text-neutral-100`}>
        About
      </h2>
      <div className={`whitespace-pre-line text-neutral-300 md:text-xl ${geistSans.className} space-y-6 my-2`}>
        <p>
          My name is Ariel Silva and I'm a recently graduated Computer Engineer passionate about
          innovation and continuous learning.
        </p>
        <p>
          I'm commited to delivering efficient technological solutions and
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