import z from "zod";

export const mdxSchema = z.object({
  content: z.string(),
  data: z.object({
    title: z.string(),
    date: z.string().optional(),
    cover_image: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});
