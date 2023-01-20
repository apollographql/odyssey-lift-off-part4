import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { ApolloCache } from '@apollo/client';

// const renderApollo = (
//   node: React.ReactElement,
//   { mocks, addTypename, defaultOptions, cache, resolvers, ...options }: { mocks: MockedResponse<Record<string, any>>[], addTypename?: boolean, defaultOptions?: {}, cache?: ApolloCache<{}>, resolvers?: {}}
// ) => {
//   console.log({ mocks: mocks[0].result.data.tracksForHome })
//   return render(
//     <MockedProvider
//       mocks={mocks}
//       addTypename={addTypename}
//       defaultOptions={defaultOptions}
//       cache={cache}
//       resolvers={resolvers}
//     >
//       {node}
//     </MockedProvider>,
//     options
//   );
// };

const renderApollo = (
  node,
  { mocks, addTypename, defaultOptions, cache, resolvers, ...options }
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
      removeTypename
    >
      {node}
    </MockedProvider>,
    options
  );
};

export * from '@testing-library/react';
export { renderApollo };
