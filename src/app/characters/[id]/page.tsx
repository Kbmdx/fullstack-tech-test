import React from "react";
import { getClient } from "../../lib/client";
import { GET_CHARACTER } from "@/app/queries/character";
import { characterDetailsSchema } from "@/app/schemas/character";
import Image from "next/image";
import Link from "next/link";

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await getClient().query({
    query: GET_CHARACTER,
    variables: { id: params.id },
  });


  const parsedData = characterDetailsSchema.safeParse(data.character ?? []);
  if (!parsedData.success) {
    console.error(parsedData.error.message);
    return <code>Bye morty</code>;
  }
  const episodeArray = parsedData.data.episode;
  const lastEpisode = episodeArray[episodeArray.length - 1];

  return (
    <>
      <div>
      <Link  className="flex relative top-[-150px]" href={`/`}>
        <button>Back to character listing</button>
      </Link>
        <div className="flex relative item-center justify-start top-[-150px]">
          <Image
            className="rounded-full"
            src={parsedData.data.image}
            height={250}
            width={250}
            alt="Character image"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-semibold">{parsedData.data.name}</h1>
            <p>Status: {parsedData.data.status}</p>
            <p>Origin:{parsedData.data.origin.name}</p>
          </div>
        </div>
        <div className="pb-6 md:justify-start justify-center">
          <h1 className="text-3xl font-semibold">Location data</h1>
          <div className="flex justify-between flex-col pb-6">
            <p>Name:{parsedData.data.location.name}</p>
            <p>Type:{parsedData.data.location.type}</p>
            <p>Dimension: {parsedData.data.origin.dimension ?? "Unknown"}</p>
            <p>Residents:{parsedData.data.location.residents.length}</p>
          </div>
          </div>
          <div className="pb-6">
            <h1 className="text-3xl font-semibold">Episodes</h1>
            <p>First appearance: {episodeArray[0].name}, </p>
            <p>First air date: {episodeArray[0].air_date}</p>
            <p>
              First appearance character count:
              {parsedData.data.episode[0].characters?.length}
            </p>
            <p>Last appearance: {lastEpisode.name} </p>
            <p>Last air date: {lastEpisode.air_date}</p>
            <p>
              First appearance character count: {lastEpisode.characters?.length}
            </p>
          </div>
        </div>
      
    </>
  );
}
