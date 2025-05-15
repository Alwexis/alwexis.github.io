import { Client } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export const projectsDB = process.env.NOTION_PROJECTS_DATABASE!
export const experiencesDB = process.env.NOTION_EXPERIENCE_DATABASE!
