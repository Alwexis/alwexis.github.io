import rawWorks from '../../data/works.json';
import { useEffect, useState } from 'react';
import WorkCard from './WorkCard';

export default function Works() {

    const [ works, setWorks ] = useState([]);

    useEffect(() => {
        setWorks(rawWorks.slice(0, 2));
    }, [rawWorks]);

    const handleShowMore = () => {
        if (works.length == 2) {
            setWorks(rawWorks);
        } else {
            setWorks(rawWorks.slice(0, 2));
        }
    }

    return (
        <section id="work" className="max-w-xs md:max-w-2xl w-full h-fit">
            <h2 className="text-4xl font-space-grotesk text-neutral-100 animate-fade-down">Works</h2>
            <div className="grid grid-cols-1 space-y-6 my-4 animate-fade-down">
                {
                    works.map((work, index) => (
                        <WorkCard key={index} work={work} />
                    ))
                }
            </div>
            <button type="button" onClick={handleShowMore} className="font-semibold text-neutral-100 hover:text-neutral-300 border rounded-xs hover:bg-neutral-900 transition-all cursor-pointer animate-fade-down w-full py-2">
                { works.length > 3 ? 'Show less projects...' : 'Load more projects...' }
            </button>
        </section>
    );
}
