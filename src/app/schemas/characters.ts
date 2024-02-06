import { z } from "zod";
import { characterSchema } from "./character";

export const charactersSchema = z.array(characterSchema);