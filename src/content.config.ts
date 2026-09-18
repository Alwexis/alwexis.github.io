import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const worksCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    highlight: z.string().optional(),
    description: z.string(),
    extendedDescription: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    githubLink: z.string().optional(),
    liveLink: z.string().optional(),
    technologies: z.array(z.string()),
    featured: z.boolean().optional(),
    gallery: z.array(z.string()).optional(),
    priority: z.number().optional().default(0),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    companyLink: z.string(),
    date: z.string(),
    location: z.string(),
    description: z.string(),
    extendedDescription: z.string().optional(),
    achievements: z.array(z.string()),
    technologies: z.array(z.string()),
    isPrimaryNode: z.boolean().optional(),
  }),
});

export const collections = {
  works: worksCollection,
  experience: experienceCollection,
};
