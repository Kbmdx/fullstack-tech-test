/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery Character($id: ID!) {\n    character(id: $id) {\n      name\n      id\n      gender\n      status\n      species\n      image\n      location {\n        name\n        dimension\n        type\n        residents {\n          id\n        }\n      }\n      origin {\n        name\n        dimension\n      }\n      episode {\n        name\n        episode\n        air_date\n        characters{\n          id\n        }\n      }\n    }\n  }\n": types.CharacterDocument,
    "\nquery Characters($page: Int!, $name: String!) {\n    characters(page: $page, filter: { name: $name }) {\n        info {\n          count\n        }\n        results {\n          id\n          name\n          gender\n          species\n          image\n        }\n    }\n}\n": types.CharactersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Character($id: ID!) {\n    character(id: $id) {\n      name\n      id\n      gender\n      status\n      species\n      image\n      location {\n        name\n        dimension\n        type\n        residents {\n          id\n        }\n      }\n      origin {\n        name\n        dimension\n      }\n      episode {\n        name\n        episode\n        air_date\n        characters{\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery Character($id: ID!) {\n    character(id: $id) {\n      name\n      id\n      gender\n      status\n      species\n      image\n      location {\n        name\n        dimension\n        type\n        residents {\n          id\n        }\n      }\n      origin {\n        name\n        dimension\n      }\n      episode {\n        name\n        episode\n        air_date\n        characters{\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Characters($page: Int!, $name: String!) {\n    characters(page: $page, filter: { name: $name }) {\n        info {\n          count\n        }\n        results {\n          id\n          name\n          gender\n          species\n          image\n        }\n    }\n}\n"): (typeof documents)["\nquery Characters($page: Int!, $name: String!) {\n    characters(page: $page, filter: { name: $name }) {\n        info {\n          count\n        }\n        results {\n          id\n          name\n          gender\n          species\n          image\n        }\n    }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;