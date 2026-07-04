import { defineCollection } from "astro:content";
import { z } from "zod";
import { file, glob } from "astro/loaders";

const linkSchema = z.object({
  url: z.url(),
  icon: z.string(),
  label: z.string(),
});

const speakers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/speakers" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image().optional(),
      links: z.array(linkSchema).optional(),
    }),
});

const organizers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/organizers" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      index: z.number().optional(),
      links: z.array(linkSchema).optional(),
    }),
});

const sessionSchema = z.object({
  label: z.string().optional(),
  title: z.string().optional(),
  speakerIds: z.array(z.string()).optional(),
  when: z.string().optional(),
  until: z.string().optional(),
  isKeynote: z.boolean().optional(),
});

const schedule = defineCollection({
  loader: file("./src/content/schedule.yaml"),
  schema: sessionSchema,
});

const sponsors = defineCollection({
  loader: file("./src/content/sponsors.yaml"),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    link: z.url(),
  }),
});

export const collections = { speakers, organizers, schedule, sponsors };
