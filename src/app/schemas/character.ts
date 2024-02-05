import { z } from "zod";

export const characterSchema = z.object({
    id: z.string(),
    name: z.string(),
    gender:z.string(),
    species:z.string(),
    image:z.string().url()
  });