import { s } from "vitest/dist/reporters-OH1c16Kq.js";
import { z } from "zod";

export const characterSchema = z.object({
  id: z.string(),
  name: z.string(),
  gender: z.string(),
  species: z.string(),
  image: z.string().url(),
});

export const characterDetailsSchema = characterSchema.merge(
  z.object({
    status: z.string(),
    origin: z.object({
      name: z.string(),
      dimension: z.string().nullable(),
    }),
    location: z.object({
      name: z.string(),
      type: z.string(),
      residents: z.array(z.object({ id: z.string() })),
    }),
    episode: z.array(
      z.object({
        name: z.string(),
        air_date: z.string(),
        characters: z.array(z.object({ id: z.string() })).optional(),
      })
    ),
  })
);

export type ParsedCharacter = z.infer<typeof characterSchema>;
