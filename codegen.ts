import { CodegenConfig } from "@graphql-codegen/cli";

if (!process.env.API_URL) {
  throw new Error("API_URL not set");
}

const config: CodegenConfig = {
  schema: process.env.API_URL,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
