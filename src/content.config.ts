import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "zod";

// icon and label for each known platform; links render in this order
const platforms: Record<string, { icon: string; label: string }> = {
  github: { icon: "/socials/github.svg", label: "GitHub" },
  x: { icon: "/socials/twitter.png", label: "X" },
  linkedin: { icon: "/socials/linkedin.png", label: "LinkedIn" },
  mastodon: { icon: "/socials/mastodon.png", label: "Mastodon" },
  website: { icon: "/socials/website.svg", label: "Website" },
};
const platformOrder = Object.keys(platforms);
const platformRank = (key: string) => {
  const i = platformOrder.indexOf(key.toLowerCase());
  return i === -1 ? platformOrder.length : i;
};

// `links: { github: <url>, x: <url>, ... }` in frontmatter becomes [{ url, icon, label }];
// any other key comes last, with the website icon and the key as its label
const linksSchema = z.record(z.string(), z.url()).transform((links) =>
  Object.entries(links)
    .sort(([a], [b]) => platformRank(a) - platformRank(b))
    .map(([key, url]) => ({
      url,
      ...(platforms[key.toLowerCase()] ?? {
        icon: platforms.website.icon,
        label: key,
      }),
    })),
);

const speakers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/speakers" }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        tagline: z.string().optional(),
        image: image().optional(),
        keynoter: z.boolean().optional(),
        order: z.number().default(Number.MAX_SAFE_INTEGER),
        links: linksSchema.optional(),
      })
      .refine((s) => !s.keynoter || s.image, {
        message: "keynote speakers need an image",
        path: ["image"],
      }),
});

const organizers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/organizers" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      links: linksSchema.optional(),
    }),
});

const sessionSchema = z.object({
  label: z.string().optional(),
  title: z.string().optional(),
  speakerIds: z.array(z.string()).optional(),
  when: z.string().optional(),
  until: z.string().optional(),
  isKeynote: z.boolean().optional(),
  isHighlight: z.boolean().optional(),
  description: z.string().optional(),
  language: z.enum(["EN", "TR"]).optional(),
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
    weight: z.number().default(Number.MAX_SAFE_INTEGER),
    maxHeightRem: z.number().default(6),
  }),
});

export const collections = { speakers, organizers, schedule, sponsors };
