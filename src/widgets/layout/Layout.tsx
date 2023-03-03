import { Container } from '@mui/material';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

import { UILayout } from './style';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <UILayout>
      <Header />
      <Container maxWidth="xl">
        <main>{children}</main>
      </Container>
      <Footer />
    </UILayout>
  );
}
