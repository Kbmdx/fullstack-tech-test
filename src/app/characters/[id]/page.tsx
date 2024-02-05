import React from "react";
import { getClient } from "../../lib/client";
import { GET_ALIVE_MORTYS } from "../../queries/characters";
import { Grid, charactersSchema } from "@/components/organisms/TaskIntro/Grid";
import { useRouter } from "next/router";

export default async function CharacterPage({ params }: { params: { id: string } }) {
  const { loading, data } = await getClient().query({
    query: GET_ALIVE_MORTYS,
    variables: { page: 1, name: "morty" },
  });

// get the one character init params.id

  const parsedData = charactersSchema.safeParse(data.characters?.results ?? []);

  if (!parsedData.success) {
    console.error(parsedData.error.message);
    return <code>Bye morty</code>;
  }

  return (
    <>
      {loading ? <div>loading</div> : <Grid data={parsedData.data} />}
    </>
  );
}
