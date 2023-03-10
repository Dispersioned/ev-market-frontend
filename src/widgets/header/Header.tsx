import { Container, Typography } from '@mui/material';
import cartIcon from 'assets/icons/cart.svg';
import loginIcon from 'assets/icons/login.svg';
import logoIcon from 'assets/icons/logo.svg';
import logoutIcon from 'assets/icons/logout.svg';
import profileIcon from 'assets/icons/profile.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { useAction, useTypeSelector } from 'shared/hooks/redux';
import { Flex } from 'shared/styles';

import { Content, UIHeader } from './Header.styles';
import { Navigation } from './Navigation';

export function Header() {
  const user = useTypeSelector((state) => state.viewer.user);

  const { logout } = useAction();

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
            <Flex gap={20}>
              <Link to={ROUTES.cart}>
                <img src={cartIcon} alt="cart" />
              </Link>
              <Link to={ROUTES.profile}>
                <img src={profileIcon} alt="profile" />
              </Link>
              <button type="button" onClick={logout}>
                <img src={logoutIcon} alt="logout" />
              </button>
            </Flex>
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
