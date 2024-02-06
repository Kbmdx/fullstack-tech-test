import { gql } from "@/__generated__";

export const GET_CHARACTER = gql(`
query Character($id: ID!) {
    character(id: $id) {
      name
      id
      gender
      status
      species
      image
      location {
        name
        dimension
        type
        residents {
          id
        }
      }
      origin {
        name
        dimension
      }
      episode {
        name
        episode
        air_date
        characters{
          id
        }
      }
    }
  }
`);
