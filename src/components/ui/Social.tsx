'use client';

export default function Social() {
  return (
    <div className="relative mx-auto max-w-64 lg:max-w-md w-full xl:hidden text-neutral-100 mt-18 mb-12 md:my-32">
      <section className="flex justify-between w-full">
        <a href="https://github.com/Alwexis" target="_blank" title="Ariel Silva's GitHub">
          <svg
            className="cursor-pointer w-6 lg:w-10 hover:scale-110 hover:text-neutral-300 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/arielsilvar" target="_blank" title="Ariel Silva's LinkedIn">
          <svg
            className="cursor-pointer w-6 lg:w-10 hover:scale-110 hover:text-neutral-300 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714M7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3z"
            />
          </svg>
        </a>
        <a href="https://x.com/alwexis_dev" target="_blank" title="Ariel Silva's X/Twitter">
          <svg
            className="cursor-pointer w-6 lg:w-10 hover:scale-110 hover:text-neutral-300 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
            />
          </svg>
        </a>
        <a href="mailto:arielsilvar.dev@gmail.com" title="Ariel Silva's Email">
          <svg
            className="cursor-pointer w-6 lg:w-10 hover:scale-110 hover:text-neutral-300 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m8-10a8 8 0 1 0-3.968 6.911l-1.008-1.728A6 6 0 1 1 18 12v1a1 1 0 1 1-2 0V9h-1.354a4 4 0 1 0 .066 5.94A3 3 0 0 0 20 13zm-8-2a2 2 0 1 1 0 4a2 2 0 0 1 0-4"
            />
          </svg>
        </a>
      </section>
    </div>
  );
}