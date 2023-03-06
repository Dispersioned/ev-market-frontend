import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

import { UILayout } from './styles';

type LayoutProps = PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <UILayout>
      <Header />
      <Container maxWidth="xl" style={{ display: 'flex', flex: '1 0 100%' }}>
        <main style={{ marginTop: 15, flex: '1 0 100%' }}>{children}</main>
      </Container>
      <Footer />
    </UILayout>
  );
}
