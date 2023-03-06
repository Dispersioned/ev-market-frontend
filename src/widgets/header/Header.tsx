import { Container, Typography } from '@mui/material';
import loginIcon from 'assets/icons/login.svg';
import logoIcon from 'assets/icons/logo.svg';
import profileIcon from 'assets/icons/profile.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { useTypeSelector } from 'shared/hooks/redux';

import { Navigation } from './Navigation';
import { Content, UIHeader } from './styles';

export function Header() {
  const user = useTypeSelector((state) => state.viewer.user);

  return (
    <UIHeader>
      <Container maxWidth="xl">
        <Content>
          <Link to={ROUTES.home}>
            <img src={logoIcon} alt="logo" />
          </Link>
          <Navigation />
          <Typography>contact us</Typography>
          {user ? (
            <Link to={ROUTES.profile}>
              <img src={profileIcon} alt="profile" />
            </Link>
          ) : (
            <Link to={ROUTES.login}>
              <img src={loginIcon} alt="login" />
            </Link>
          )}
        </Content>
      </Container>
    </UIHeader>
  );
}
