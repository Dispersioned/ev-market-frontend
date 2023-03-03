import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

import { NavList } from './style';

type NavLink = {
  title: string;
  href: keyof typeof ROUTES;
};

export function Navigation() {
  const navLinks: NavLink[] = [{ title: 'catalog', href: ROUTES.catalog }];

  return (
    <nav>
      <NavList>
        {navLinks.map((navLink) => (
          <li key={navLink.href}>
            <Link to={navLink.href}>{navLink.title}</Link>
          </li>
        ))}
      </NavList>
    </nav>
  );
}
