import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
