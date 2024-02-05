import { z } from "zod";

export const originSchema = z.object({
name:z.string(),
dimension:z.string(),
});
