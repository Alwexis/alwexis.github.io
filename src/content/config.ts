import { defineCollection, z } from "astro:content";

const languages = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        icon: z.string(),
        certifications: z.array(
            z.object({
                name: z.string(),
                provider: z.string(),
                url: z.string(),
                file: z.string(),
                thumbnail: z.string()
            }).optional()
        )
    })
});

const databases = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        icon: z.string(),
        certifications: z.array(
            z.object({
                name: z.string(),
                provider: z.string(),
                url: z.string(),
                file: z.string(),
                thumbnail: z.string()
            }).optional()
        )
    })
});

const frameworks = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        icon: z.string(),
        certifications: z.array(
            z.object({
                name: z.string(),
                provider: z.string(),
                url: z.string(),
                file: z.string(),
                thumbnail: z.string()
            }).optional()
        )
    })
});

const tools = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        icon: z.string(),
        certifications: z.array(
            z.object({
                name: z.string(),
                provider: z.string(),
                url: z.string(),
                file: z.string(),
                thumbnail: z.string()
            }).optional()
        )
    })
});

const others = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        icon: z.string(),
        certifications: z.array(
            z.object({
                name: z.string(),
                provider: z.string(),
                url: z.string(),
                file: z.string(),
                thumbnail: z.string()
            }).optional()
        )
    })
});

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        url: z.string().url().optional(),
        repository: z.string().url(),
        technologies: z.array(z.object({
            id: z.string(),
            name: z.string(),
            icon: z.string()
        }))
    })
})

const experience = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.string(),
        name: z.string(),
        type: z.string(),
        role: z.string(),
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
            id: z.string(),
            name: z.string(),
            icon: z.string().optional()
        })).optional()
    })
})

export const collections = { languages, frameworks, databases, tools, others, projects, experience };