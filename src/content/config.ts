import { defineCollection, z } from "astro:content";

const works = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        priority: z.number(),
        description: z.string(),
        images: z.object({
            thumbnail: z.string().optional(),
            gallery: z.array(z.object({
                src: z.string(),
                title: z.string(),
                description: z.string().optional(),
                alt: z.string().optional()
            })).optional()
        }).optional(),
        urls: z.array(z.object({
            title: z.string(),
            url: z.string().url()
        })),
        technologies: z.array(z.object({
            name: z.string(),
            icon: z.string()
        }))
    })
})

const experience = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        priority: z.number(),
        name: z.string(),
        type: z.string(),
        role: z.string(),
        location: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        difference: z.string().optional(),
        company: z.object({
            name: z.string(),
            url: z.string().url().optional()
        }),
        activities: z.array(z.string()),
        skills: z.array(z.object({
            name: z.string(),
            icon: z.string().optional()
        })).optional()
    })
})

export const collections = { works, experience };