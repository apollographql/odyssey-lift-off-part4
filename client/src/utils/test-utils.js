import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';

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

export const renderApolloWithRouter = (node,
  { mocks, addTypename, defaultOptions, cache, resolvers, ...options }) => {
  return (
    <BrowserRouter>
    <Routes>
    {renderApollo(node,
  { mocks, addTypename, defaultOptions, cache, resolvers, ...options })}
    </Routes>
    </BrowserRouter>
  )
}

export * from '@testing-library/react';
export { renderApollo };
