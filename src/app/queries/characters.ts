import { gql } from "@/__generated__";

export const GET_CHARACTERS = gql(`
query Characters($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
        info {
          count
        }
        results {
          id
          name
          gender
          species
          image
        }
    }
}
`);
