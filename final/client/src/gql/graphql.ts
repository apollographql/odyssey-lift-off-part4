/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Author of a complete Track or a Module */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  /** Author's first and last name */
  name: Scalars['String'];
  /** Author's profile picture */
  photo?: Maybe<Scalars['String']>;
};

export type IncrementTrackViewsResponse = {
  __typename?: 'IncrementTrackViewsResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  /** Newly updated track after a successful mutation */
  track?: Maybe<Track>;
};

/** A Module is a single unit of teaching. Multiple Modules compose a Track */
export type Module = {
  __typename?: 'Module';
  /** The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript */
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The module's length in minutes */
  length?: Maybe<Scalars['Int']>;
  /** The module's title */
  title: Scalars['String'];
  /** The module's video url, for video-based modules */
  videoUrl?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Increment the number of views of a given track, when the track card is clicked */
  incrementTrackViews: IncrementTrackViewsResponse;
};


export type MutationIncrementTrackViewsArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /** Fetch a specific module, provided a module's ID */
  module: Module;
  /** Fetch a specific track, provided a track's ID */
  track: Track;
  /** Query to get tracks array for the homepage grid */
  tracksForHome: Array<Track>;
};


export type QueryModuleArgs = {
  id: Scalars['ID'];
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  /** The track's main Author */
  author: Author;
  /** The track's complete description, can be in markdown format */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The track's approximate length to complete, in minutes */
  length?: Maybe<Scalars['Int']>;
  /** The track's complete array of Modules */
  modules: Array<Module>;
  /** The number of modules this track contains */
  modulesCount?: Maybe<Scalars['Int']>;
  /** The number of times a track has been viewed */
  numberOfViews?: Maybe<Scalars['Int']>;
  /** The track's illustration to display in track card or track page detail */
  thumbnail?: Maybe<Scalars['String']>;
  /** The track's title */
  title: Scalars['String'];
};

export type IncrementTrackViewsMutationMutationVariables = Exact<{
  incrementTrackViewsId: Scalars['ID'];
}>;


export type IncrementTrackViewsMutationMutation = { __typename?: 'Mutation', incrementTrackViews: { __typename?: 'IncrementTrackViewsResponse', code: number, success: boolean, message: string, track?: { __typename?: 'Track', id: string, numberOfViews?: number | null } | null } };

export type GetModuleAndParentTrackQueryVariables = Exact<{
  moduleId: Scalars['ID'];
  trackId: Scalars['ID'];
}>;


export type GetModuleAndParentTrackQuery = { __typename?: 'Query', module: { __typename?: 'Module', id: string, title: string, content?: string | null, videoUrl?: string | null }, track: { __typename?: 'Track', id: string, title: string, modules: Array<{ __typename?: 'Module', id: string, title: string, length?: number | null }> } };

export type GetTrackQueryVariables = Exact<{
  trackId: Scalars['ID'];
}>;


export type GetTrackQuery = { __typename?: 'Query', track: { __typename?: 'Track', id: string, title: string, thumbnail?: string | null, length?: number | null, modulesCount?: number | null, numberOfViews?: number | null, description?: string | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null }, modules: Array<{ __typename?: 'Module', id: string, title: string, length?: number | null }> } };

export type GetTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTracksQuery = { __typename?: 'Query', tracksForHome: Array<{ __typename?: 'Track', id: string, title: string, thumbnail?: string | null, length?: number | null, modulesCount?: number | null, modules: Array<{ __typename?: 'Module', id: string, title: string }>, author: { __typename?: 'Author', id: string, name: string, photo?: string | null } }> };


export const IncrementTrackViewsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IncrementTrackViewsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementTrackViewsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"incrementTrackViews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementTrackViewsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfViews"}}]}}]}}]}}]} as unknown as DocumentNode<IncrementTrackViewsMutationMutation, IncrementTrackViewsMutationMutationVariables>;
export const GetModuleAndParentTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getModuleAndParentTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"moduleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"module"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"moduleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"videoUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}}]} as unknown as DocumentNode<GetModuleAndParentTrackQuery, GetModuleAndParentTrackQueryVariables>;
export const GetTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"track"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"modulesCount"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfViews"}},{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"length"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetTrackQuery, GetTrackQueryVariables>;
export const GetTracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tracksForHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"modulesCount"}},{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}}]}}]}}]} as unknown as DocumentNode<GetTracksQuery, GetTracksQueryVariables>;