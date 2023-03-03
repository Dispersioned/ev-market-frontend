import { Container } from '@mui/material';
import Logo from 'assets/icons/logo.svg';
import { Link } from 'react-router-dom';

import { Content } from './style';

export function Header() {
  return (
    <header>
      <Container maxWidth="xl">
        <Content>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </Content>
      </Container>
    </header>
  );
}
