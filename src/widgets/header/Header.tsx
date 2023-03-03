import { Container, Typography } from '@mui/material';
import logoIcon from 'assets/icons/logo.svg';
import profileIcon from 'assets/icons/profile.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

import { Navigation } from './Navigation';
import { Content, UIHeader } from './style';

export function Header() {
  return (
    <UIHeader>
      <Container maxWidth="xl">
        <Content>
          <Link to={ROUTES.home}>
            <img src={logoIcon} alt="logo" />
          </Link>
          <Navigation />
          <Typography>contact us</Typography>
          <Link to={ROUTES.profile}>
            <img src={profileIcon} alt="profile" />
          </Link>
        </Content>
      </Container>
    </UIHeader>
  );
}
