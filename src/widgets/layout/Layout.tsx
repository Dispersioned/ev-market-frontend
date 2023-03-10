import { Container, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

import { UILayout } from './styles';

type LayoutProps = PropsWithChildren<{
  title?: string;
}>;

export function Layout({ children, title }: LayoutProps) {
  return (
    <UILayout>
      <Header />
      <Container maxWidth="xl" style={{ display: 'flex', flex: '1 0 100%' }}>
        <main style={{ marginTop: 15, flex: '1 0 100%' }}>
          {title && (
            <Typography variant="h3" style={{ marginBottom: 15 }}>
              {title}
            </Typography>
          )}
          {children}
        </main>
      </Container>
      <Footer />
    </UILayout>
  );
}
