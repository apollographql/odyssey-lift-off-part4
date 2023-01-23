import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '../__generated__'
import type { Track } from '../__generated__/graphql'
import TrackCard from '../containers/track-card';
import { Layout, QueryResult } from '../components';
import { RouteComponentProps } from "@reach/router";


/** TRACKS gql query to retrieve all tracks */
const TRACKS = gql(`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      modules {
        id
        title
      }
      author {
        id
        name
        photo
      }
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = (_: RouteComponentProps) => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track: Track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
