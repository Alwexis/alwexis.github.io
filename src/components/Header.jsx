export default function Header({ page, classNames = "" }) {
  const pages = [
    { name: "about", path: "main" },
    { name: "projects", path: "projects" },
    { name: "experience", path: "experience" },
  ];
  
  const copyEmailToClipboard = () => {
    // navigator.clipboard.writeText("arielsilvar.dev@gmail.com");
    window.navigator.clipboard.writeText("arielsilvar.dev@gmail.com");
  };

  const goTo = (path) => {
    document.getElementById(path).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`${classNames} w-full flex flex-col items-center`}>
      <header className="first:rounded-l-md last:rounded-r-md bg-transparent w-full flex justify-center text-neutral-200 font-nunito-sans tracking-widest md:text-xl">
        {pages.map((item) => (
          <a
            key={item.name}
            onClick={() => goTo(item.path)}
            className={`${
              page === item.name ? "text-red-400" : ""
            } cursor-pointer hover:text-neutral-400 hover:bg-neutral-900 bg-opacity-75 transition-all duration-500 px-2 py-1`}
          >
            {item.name}
          </a>
        ))}
      </header>
      <div className="w-4/5 md:w-2/5 h-[1px] bg-red-400 bg-opacity-50 my-2 animate-pulse"></div>
      <section className="flex items-center justify-center space-x-6 bg-transparent w-full text-neutral-200">
        <a
          className="hover:text-neutral-400 hover:bg-neutral-800 hover:scale-105 bg-opacity-50 rounded-md transition-all duration-500"
          href="https://github.com/Alwexis"
          target="_blank"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
              />
            </svg>
          </div>
        </a>
        <a
          className="hover:text-neutral-400 hover:bg-neutral-800 bg-opacity-50 hover:scale-105 rounded-md transition-all duration-500"
          href="https://www.linkedin.com/in/arielsilvar/"
          target="_blank"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.092v4.714M7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549m1.336 9.764H5.667V9.75H8.34zM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3z"
              />
            </svg>
          </div>
        </a>
        <a
          className="hover:text-neutral-400 hover:bg-neutral-800 hover:scale-105 bg-opacity-50 rounded-md transition-all duration-500"
          href="https://x.com/Alwexisss"
          target="_blank"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
              />
            </svg>
          </div>
        </a>
        <div
          onClick={copyEmailToClipboard}
          className="w-8 h-8 flex items-center justify-center hover:text-neutral-400 hover:bg-neutral-800 hover:scale-105 bg-opacity-50 rounded-md transition-all duration-500 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
