import { notion, experiencesDB } from '@/lib/notion/client'
import { Experience } from './types'

export async function fetchExperiences(): Promise<Experience[]> {
    const response = await notion.databases.query({
        database_id: experiencesDB,
        sorts: [{ property: 'date', direction: 'descending' }]
    })

    return response.results.map((page: any) => {
        return {
            id: page.id,
            name: page.properties.name.title[0].plain_text,
            slug: page.properties.slug.rich_text[0].plain_text,
            location: page.properties.location.rich_text[0].plain_text,
            start_date: page.properties.date.date.start,
            end_date: page.properties.date.date.end,
            short_description: page.properties.desc_short?.rich_text[0]?.plain_text || '',
            description: page.properties.desc_long?.rich_text[0]?.plain_text || '',
            company: {
                name: page.properties.company_name.rich_text[0].plain_text,
                url: page.properties.company_url.url,
            },
            activities: page.properties.activities.multi_select.map((t: any) => t.name),
            skills: page.properties.skills.multi_select.map((t: any) => t.name),
        }
    })
}
