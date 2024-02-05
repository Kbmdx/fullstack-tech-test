import Image from "next/image";
import Link from "next/link";
import { ParsedCharacter } from "./Grid";

export interface GridItemProps extends ParsedCharacter {}

export const GridItem = ({ name, species, gender, id, image }: GridItemProps) => {
  return (
    <div className="flex-col flex justify-between">
      <Image className="place-self-center w-full pb-4"src={image} alt="Character image" width={250} height={250} />
      <div className="flex flex-col justify-between pb-4 h-full">
      <p className="truncate">Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Species: {species}</p>
      </div>
      <Link href={`/characters/id/${id}`}>
        <button className="bg-slate-300 w-full">View Profile</button>
      </Link>
    </div>
  );
};
