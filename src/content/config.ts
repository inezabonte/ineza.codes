import { defineCollection, z } from "astro:content";

const article = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    cover_image: z.string().url(),
    tags: z.array(z.string()),
  }),
});

export const collections = { article };
