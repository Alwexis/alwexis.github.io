import { notion, projectsDB } from "@lib/notion/client";
import { Project } from "@lib/types";

export async function fetchProjects(): Promise<Project[]> {
    const response = await notion.databases.query({
        database_id: projectsDB,
        sorts: [
            {
                property: 'priority',
                direction: 'ascending',
            },
        ],
    })

    return response.results.map((page: any) => {
        return {
            id: page.id,
            name: page.properties.name.title[0].plain_text,
            slug: page.properties.slug.rich_text[0].plain_text,
            short_description: page.properties.desc_short?.rich_text[0]?.plain_text || '',
            description: page.properties.desc_long?.rich_text[0]?.plain_text || '',
            stack: page.properties.stack.multi_select.map((t: any) => t.name),
            repository: page.properties.repository.url,
            demo: page.properties.demo?.url || null,
            pinned: page.properties.pinned.checkbox,
            image: page.properties.image.url,
        }
    })
}