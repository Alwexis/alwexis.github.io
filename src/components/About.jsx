export default function About() {
  return (
    <section className="w-full my-24 flex flex-col grow animate-fade animate-duration-[2000ms]">
      <h2 className="font-bold font-nunito-sans tracking-widest text-neutral-100 text-2xl">
        Ariel Silva
      </h2>
      <h3 className="font-semibold font-nunito tracking-widest text-xl text-red-400">
        Developer
      </h3>
      <p className="font-inter tracking-wider text-stone-200 text-opacity-75 whitespace-pre-line">
        I am a 4th-year Computer Engineering student passionate about
        technology. My professional interests include{" "}
        <span className="text-red-400 font-dm-sans">
          Software Development
        </span>{" "}
        and{" "}
        <span className="text-red-400 font-dm-sans">
          Full Stack
        </span>
        . Currently, together with my team, I am developing{" "}
        <a
          href="https://github.com/Alwexis/SignAI/"
          target="_blank"
          className="text-red-400 font-nunito-sans font-bold"
        >
          SignAI
        </a>
        , our thesis project based on{" "}
        <span className="text-red-400 font-dm-sans">
          AI
        </span>{" "}
        (
        <span className="text-red-400 font-dm-sans">
          Computer Vision
        </span>
        ), which has stood out in competitions, podcasts, and will be presented
        at the Main Campus of our university, located in the Country's Capital.
      </p>
    </section>
  );
}
