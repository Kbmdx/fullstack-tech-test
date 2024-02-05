import { characterSchema } from "@/app/schemas/character";
import { GridItem } from "./GridItem";
import { z } from "zod";

// TODO: move to schemas dir
export const charactersSchema = z.array(characterSchema);
// TOOD same as above
export type ParsedCharacter = z.infer<typeof characterSchema>;

export interface GridProps {
  data: ParsedCharacter[];
}

export const Grid = ({ data }: GridProps) => {
  return (
    <div className="md:grid-cols-6 grid-cols-2 grid gap-6 bg-white p-5 bg-transparent	">
      {data.map((character) => (
        <GridItem {...character} />
      ))}
    </div>
  );
};
