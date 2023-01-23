import React from 'react';
import { Header, Footer } from '../components';
import styled from '@emotion/styled';
import { widths, unit } from '../styles';
import { PropsWithChildren } from 'react'

interface LayoutProps {
  fullWidth?: boolean;
  grid?: boolean;
}
/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ fullWidth, children, grid }) => {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;

/** Layout styled components */

// TODO HELP
// @ts-ignore
const PageContainer = styled.div((props: LayoutProps) => ({
  display: 'flex',
  justifyContent: props.grid ? 'center' : 'top',
  flexDirection: props.grid ? 'row' : 'column',
  flexWrap: 'wrap',
  alignSelf: 'center',
  flexGrow: 1,
  maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
  width: '100%',
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));
