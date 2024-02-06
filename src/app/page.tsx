import React from "react";
import { getClient } from "./lib/client";
import { GET_CHARACTERS } from "./queries/characters";
import { Grid } from "@/components/organisms/TaskIntro/Grid";
import { charactersSchema } from "./schemas/characters";

export default async function HomePage() {
  const { loading, data } = await getClient().query({
    query: GET_CHARACTERS,
    variables: { page: 1, name: "morty" },
  });

  // TODO: empty state if (!data) { ... }

  const parsedData = charactersSchema.safeParse(data.characters?.results ?? []);

  if (!parsedData.success) {
    console.error(parsedData.error.message);
    return <code>Bye morty</code>;
  }

  return (
    <>
      <div className="bg-gray-300 w-full h-80 z-1">
        <h1 className="text-8xl p-10 text-center">RICK AND MORTY</h1>
        </div>
        <div className="container mx-auto relative md:top-[-90px]">
        {loading ? <div>loading</div> : <Grid data={parsedData.data} />}
        </div>
        
      
    </>
  );
}
