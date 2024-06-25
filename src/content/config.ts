import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      cover: image().optional(),
      coverAlt: z.string().optional(),
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
