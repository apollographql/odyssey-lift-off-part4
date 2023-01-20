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
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation IncrementTrackViewsMutation($incrementTrackViewsId: ID!) {\n    incrementTrackViews(id: $incrementTrackViewsId) {\n      code\n      success\n      message\n      track {\n        id\n        numberOfViews\n      }\n    }\n  }\n": types.IncrementTrackViewsMutationDocument,
    "\n  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {\n    module(id: $moduleId) {\n      id\n      title\n      content\n      videoUrl\n    }\n    track(id: $trackId) {\n      id\n      title\n      modules {\n        id\n        title\n        length\n      }\n    }\n  }\n": types.GetModuleAndParentTrackDocument,
    "\n  query getTrack($trackId: ID!) {\n    track(id: $trackId) {\n      id\n      title\n      author {\n        id\n        name\n        photo\n      }\n      thumbnail\n      length\n      modulesCount\n      numberOfViews\n      modules {\n        id\n        title\n        length\n      }\n      description\n    }\n  }\n": types.GetTrackDocument,
    "\n  query getTracks {\n    tracksForHome {\n      id\n      title\n      thumbnail\n      length\n      modulesCount\n      modules {\n        id\n        title\n      }\n      author {\n        id\n        name\n        photo\n      }\n    }\n  }\n": types.GetTracksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
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
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation IncrementTrackViewsMutation($incrementTrackViewsId: ID!) {\n    incrementTrackViews(id: $incrementTrackViewsId) {\n      code\n      success\n      message\n      track {\n        id\n        numberOfViews\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation IncrementTrackViewsMutation($incrementTrackViewsId: ID!) {\n    incrementTrackViews(id: $incrementTrackViewsId) {\n      code\n      success\n      message\n      track {\n        id\n        numberOfViews\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {\n    module(id: $moduleId) {\n      id\n      title\n      content\n      videoUrl\n    }\n    track(id: $trackId) {\n      id\n      title\n      modules {\n        id\n        title\n        length\n      }\n    }\n  }\n"): (typeof documents)["\n  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {\n    module(id: $moduleId) {\n      id\n      title\n      content\n      videoUrl\n    }\n    track(id: $trackId) {\n      id\n      title\n      modules {\n        id\n        title\n        length\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTrack($trackId: ID!) {\n    track(id: $trackId) {\n      id\n      title\n      author {\n        id\n        name\n        photo\n      }\n      thumbnail\n      length\n      modulesCount\n      numberOfViews\n      modules {\n        id\n        title\n        length\n      }\n      description\n    }\n  }\n"): (typeof documents)["\n  query getTrack($trackId: ID!) {\n    track(id: $trackId) {\n      id\n      title\n      author {\n        id\n        name\n        photo\n      }\n      thumbnail\n      length\n      modulesCount\n      numberOfViews\n      modules {\n        id\n        title\n        length\n      }\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getTracks {\n    tracksForHome {\n      id\n      title\n      thumbnail\n      length\n      modulesCount\n      modules {\n        id\n        title\n      }\n      author {\n        id\n        name\n        photo\n      }\n    }\n  }\n"): (typeof documents)["\n  query getTracks {\n    tracksForHome {\n      id\n      title\n      thumbnail\n      length\n      modulesCount\n      modules {\n        id\n        title\n      }\n      author {\n        id\n        name\n        photo\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;