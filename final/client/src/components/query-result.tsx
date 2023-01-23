import React from 'react';
import styled from '@emotion/styled';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';
import { ApolloError, /* QueryResult as QueryResultData */ } from '@apollo/client';
import { PropsWithChildren } from 'react'


interface QueryResultProps {
  loading: boolean;
  error?: ApolloError | undefined;
  // Originally was queryResultData but not sure how to type this to account for all the diff types of data that can be returned??
  data?: any,
}
/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult: React.FC<PropsWithChildren<QueryResultProps>> = ({ loading, error, data, children }): React.ReactElement<any, any> | null => {
// const QueryResult = ({ loading, error, data, children }: { loading: boolean, error: ApolloError | undefined, data: QueryResultData | undefined }) => {
  if (error) {
    console.log({ error })
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </SpinnerContainer>
    );
  }
  // revisit and remove the fragment...
  if (data) {
    return <>{children}</>;
  }

  return <p>Nothing to show...</p>;
  
  
  
};

export default QueryResult;

/** Query Result styled components */
const SpinnerContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});
