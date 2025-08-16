import { fetchProjects } from "@lib/notion/fetchProjects";
import WorkCard from "./WorkCard";

type WorkWrapperProps = {
  amount?: number;
  extended?: boolean;
};

export default async function WorkWrapper({ amount, extended = false }: WorkWrapperProps) {
  const works = await fetchProjects();

  return (
    <div className="space-y-12 my-4 animate-fade md:px-8">
      {
        works.slice(0, amount ?? works.length).map((work, index) => (
          <WorkCard key={index} work={work} extended={extended} />
        ))
      }
    </div>
  )
}