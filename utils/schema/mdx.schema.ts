import z from "zod";

export const mdxSchema = z.object({
  content: z.string(),
  data: z.object({
    title: z.string(),
    date: z.string(),
    cover_image: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});
