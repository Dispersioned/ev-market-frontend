import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

import { NavItem, NavList } from './style';

type NavLink = {
  title: string;
  href: (typeof ROUTES)[keyof typeof ROUTES];
};

export function Navigation() {
  const navLinks: NavLink[] = [{ title: 'catalog', href: ROUTES.catalog }];

  return (
    <nav>
      <NavList>
        {navLinks.map((navLink) => (
          <li key={navLink.href}>
            <NavItem component={Link} to={navLink.href}>
              {navLink.title}
            </NavItem>
          </li>
        ))}
      </NavList>
    </nav>
  );
}
