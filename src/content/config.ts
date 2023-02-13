import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: z.object({
    cover: z.string().optional(),
    date: z.date(),
    draft: z.boolean().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()),
    title: z.string(),
  }),
})

export const collections = {
  posts: postsCollection,
}
