import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  schema: z.object({
    cover: z.string().optional(),
    date: z.date(),
    title: z.string(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  post: postCollection,
}
