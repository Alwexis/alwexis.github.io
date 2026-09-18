import type { CollectionEntry } from "astro:content";

export type ExperienceEntry = CollectionEntry<"experience">;

export interface ExperienceData {
  role: string;
  company: string;
  companyLink: string;
  date: string;
  location: string;
  description: string;
  extendedDescription?: string;
  achievements: string[];
  technologies: string[];
  isPrimaryNode?: boolean;
}
