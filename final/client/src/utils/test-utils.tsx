import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/vitest';
import { MockedProvider, MockedProviderProps } from '@apollo/client/testing/react';

type RenderApolloOptions = {
  mocks?: MockedProviderProps['mocks'];
  addTypename?: boolean;
  defaultOptions?: MockedProviderProps['defaultOptions'];
  cache?: MockedProviderProps['cache'];
  resolvers?: unknown;
} & Omit<RenderOptions, 'queries'>;

const renderApollo = (
  node: React.ReactElement,
  { mocks, addTypename, defaultOptions, cache, resolvers, ...options }: RenderApolloOptions = {}
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
    >
      {node}
    </MockedProvider>,
    options
  );
};

export const renderWithRouterGenerator = (renderer: typeof renderApollo) => (
  node: React.ReactElement,
  options?: RenderApolloOptions
) => {
  return renderer(<BrowserRouter>{node}</BrowserRouter>, options)
}

export const renderWithRouter = renderWithRouterGenerator(render as unknown as typeof renderApollo)

export const renderApolloWithRouter = renderWithRouterGenerator(renderApollo)

export * from '@testing-library/react';
export { renderApollo };
