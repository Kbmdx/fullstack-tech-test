import { Header } from "@/components/organisms/TaskIntro";
import React from "react";
import { getClient } from "./lib/client";
import { GET_ALIVE_MORTYS } from "./queries/characters";
import { Grid, charactersSchema } from "@/components/organisms/TaskIntro/Grid";

export default async function HomePage() {
  const { loading, data } = await getClient().query({
    query: GET_ALIVE_MORTYS,
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
      <div className="">
        <Header />
        <div className="relative z-10 top-[-100px]">
          {loading ? <div>loading</div> : <Grid data={parsedData.data} />}
        </div>
      </div>
    </>
  );
}
