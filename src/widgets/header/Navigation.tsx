import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

import { NavItem, NavList } from './Navigation.styles';

type NavLink = {
  title: string;
  href: (typeof ROUTES)[keyof typeof ROUTES];
};

export function Navigation() {
  const navLinks: NavLink[] = [{ title: 'catalog', href: ROUTES.catalog }];

  const location = useLocation();

  return (
    <nav>
      <NavList>
        {navLinks.map((navLink) => (
          <li key={navLink.href}>
            <NavItem
              component={Link}
              to={navLink.href}
              className={location.pathname.includes(navLink.href) ? 'active' : undefined}
            >
              {navLink.title}
            </NavItem>
          </li>
        ))}
      </NavList>
    </nav>
  );
}
