import type { CollectionEntry } from "astro:content";

export interface ProjectLink {
  label: string;
  url: string;
}

export type WorkEntry = CollectionEntry<"works">;

export interface WorkData {
  title: string;
  subtitle?: string;
  highlight?: string;
  description: string;
  extendedDescription?: string;
  image: string;
  imageAlt: string;
  githubLink?: string;
  liveLink?: string;
  technologies: string[];
  featured?: boolean;
  gallery?: string[];
  priority?: number;
}
