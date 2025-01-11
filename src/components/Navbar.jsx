
export default function Navbar({ active = '' }) {
    return (
        <div className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] text-sm text-neutral-900 z-50">
            <a href="/" className="hidden md:block cursor-pointer hover:text-neutral-600">ARIEL SILVA</a>
            <section className="flex items-center md:justify-center space-x-12">
                <a href="works" className={`flex flex-col w-fit cursor-pointer after:w-full after:bg-neutral-600 after:h-0.5 ${ active == 'works' ? '' : 'after:max-w-0 hover:text-neutral-600 hover:after:max-w-full after:transition-all after:duration-500' }`}>WORKS</a>
                <a href="experience" className={`flex flex-col w-fit cursor-pointer after:w-full after:bg-neutral-600 after:h-0.5 ${ active == 'experience' ? '' : 'after:max-w-0 hover:text-neutral-600 hover:after:max-w-full after:transition-all after:duration-500' }`}>EXPERIENCE</a>
            </section>
            <div className="group flex flex-col justify-center items-center relative">
                <span className="flex flex-col w-fit cursor-pointer after:max-w-0 group-hover:text-neutral-600 group-hover:after:max-w-full after:w-full after:bg-neutral-600 after:h-0.5 after:transition-all after:duration-500">CV</span>
                <div className="absolute top-8 text-xs w-24 flex flex-col items-center h-fit max-h-0 group-hover:max-h-64 overflow-hidden transition-all duration-500 group-hover:border group-hover:border-neutral-300 px-2 z-50 bg-neutral-100">
                    <a href="CV Ariel Silva - ES.pdf" download="CV Ariel Silva - ES.pdf" className="text-xs pt-2 flex flex-col w-fit cursor-pointer after:max-w-0 hover:text-neutral-600 hover:after:max-w-full after:w-full after:bg-neutral-400 after:h-[1px] after:transition-all after:duration-500 after:mt-0.5">Download (🇪🇸)</a>
                    <div className="w-full my-2 bg-neutral-200 h-[1px]"></div>
                    <a href="CV Ariel Silva - EN.pdf" download="CV Ariel Silva - EN.pdf" className="text-xs pb-2 flex flex-col w-fit cursor-pointer after:max-w-0 hover:text-neutral-600 hover:after:max-w-full after:w-full after:bg-neutral-400 after:h-[1px] after:transition-all after:duration-500 after:mt-0.5">Download (🇺🇸)</a>
                </div>
            </div>
        </div>
    );
}