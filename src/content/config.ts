import { defineCollection, z } from "astro:content";

const presentations = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    speaker: z.string().default("Dublin Bitcoin"),
    kind: z.enum(["html", "pdf", "external"]),
    url: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  presentations,
};
