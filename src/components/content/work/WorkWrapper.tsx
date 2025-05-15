import { fetchProjects } from "@/lib/notion/fetchProjects";
import WorkCard from "./WorkCard";

type WorkWrapperProps = {
  amount?: number;
  extended?: boolean;
};

export default async function WorkWrapper({ amount, extended = false }: WorkWrapperProps) {
  const works = await fetchProjects();

  return (
    <div className="grid grid-cols-1 space-y-6 my-4">
      {
        works.slice(0, amount ?? works.length).map((work, index) => (
          <WorkCard key={index} work={work} extended={extended} />
        ))
      }
    </div>
  )
}