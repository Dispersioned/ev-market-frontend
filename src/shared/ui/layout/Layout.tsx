import { Container } from '@mui/material';

import { UILayout } from './style';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <UILayout>
      <header>header</header>
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
      <footer style={{ marginTop: 'auto' }}>footer</footer>
    </UILayout>
  );
}
