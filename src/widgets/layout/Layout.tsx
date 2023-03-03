import { Container } from '@mui/material';
import { Footer } from 'widgets/footer';

import { UILayout } from './style';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <UILayout>
      <header>header</header>
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
      <Footer />
    </UILayout>
  );
}
