import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { graphql } from '../gql'
import type { Track } from '../gql/graphql'
import TrackCard from '../containers/track-card';
import { Layout, QueryResult } from '../components';
import { RouteComponentProps } from "@reach/router";


/** TRACKS gql query to retrieve all tracks */
const TRACKS = graphql(`
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
