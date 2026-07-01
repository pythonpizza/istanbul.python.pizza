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
  schema: z.object({
    name: z.string(),
    image: z.string().optional(),
    links: z.array(linkSchema).optional(),
  }),
});

const organizers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/organizers" }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    index: z.number(),
    links: z.array(linkSchema).optional(),
  }),
});

const eventSchema = z.object({
  label: z.string().optional(),
  title: z.string().optional(),
  // ponytail: plain strings — reference() in file() loaders adds ceremony without gain
  speakerIds: z.array(z.string()).optional(),
  when: z.string().optional(),
  until: z.string().optional(),
  isKeynote: z.boolean().optional(),
});

const schedule = defineCollection({
  loader: file("./src/content/schedule.yaml"),
  schema: eventSchema,
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
