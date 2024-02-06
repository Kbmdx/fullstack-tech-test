import { z } from "zod";

export const locationSchema = z.object({
    id: z.string(),
    name: z.string(),
    dimension:z.string(),
    type:z.string(),
    residents:z.array(z.object({id:z.string()}))
  });