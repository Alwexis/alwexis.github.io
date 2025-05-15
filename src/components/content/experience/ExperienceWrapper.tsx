import { fetchExperiences } from "@/lib/notion/fetchExperience";
import ExperienceCard from "./ExperienceCard";

type ExperienceWrapperProps = {
  amount?: number;
};

export default async function ExperienceWrapper({ amount }: ExperienceWrapperProps) {
  const experiences = await fetchExperiences();

  return (
    <div className="grid grid-cols-1 space-y-8 my-4 animate-fade">
      {
        experiences.slice(0, amount ?? experiences.length).map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))
      }
    </div>
  )
}