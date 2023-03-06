import { AdminPanel } from 'pages/admin-panel';
import { Auth } from 'pages/auth';
import { Car } from 'pages/car';
import { Cart } from 'pages/cart';
import { Catalog } from 'pages/catalog';
import { Checkout } from 'pages/checkout';
import { Compare } from 'pages/compare';
import { Home } from 'pages/home';
import { OrderInfo } from 'pages/order-info';
import { Profile } from 'pages/profile';
import { ROUTES } from 'shared/config/routes';
import { IRoute } from 'shared/types';

export const APP_ROUTES: IRoute[] = [
  {
    path: ROUTES.admin,
    element: <AdminPanel />,
    allowedRoles: ['Admin'],
  },
  {
    path: ROUTES.login,
    element: <Auth type="login" />,
  },
  {
    path: ROUTES.register,
    element: <Auth type="register" />,
  },
  {
    path: ROUTES.cart,
    element: <Cart />,
    allowedRoles: ['Admin', 'User'],
  },
  {
    path: ROUTES.catalog,
    element: <Catalog />,
  },
  {
    path: ROUTES.checkout,
    element: <Checkout />,
    allowedRoles: ['Admin', 'User'],
  },
  {
    path: ROUTES.compare,
    element: <Compare />,
  },
  {
    path: `${ROUTES.car}/:id`,
    element: <Car />,
  },
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: `${ROUTES.order}/:id`,
    element: <OrderInfo />,
    allowedRoles: ['Admin', 'User'],
  },
  {
    path: ROUTES.profile,
    element: <Profile />,
    allowedRoles: ['Admin', 'User'],
  },
];
