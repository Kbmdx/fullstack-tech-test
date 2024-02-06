import { ParsedCharacter } from "@/app/schemas/character";
import { GridItem } from "./GridItem";

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
