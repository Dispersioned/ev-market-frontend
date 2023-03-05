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
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

export function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.admin} element={<AdminPanel />} />
      <Route path={ROUTES.login} element={<Auth type="login" />} />
      <Route path={ROUTES.register} element={<Auth type="register" />} />
      <Route path={ROUTES.cart} element={<Cart />} />
      <Route path={ROUTES.catalog} element={<Catalog />} />
      <Route path={ROUTES.checkout} element={<Checkout />} />
      <Route path={ROUTES.compare} element={<Compare />} />
      <Route path={`${ROUTES.car}/:id`} element={<Car />} />
      <Route index element={<Home />} />
      <Route path={`${ROUTES.order}/:id`} element={<OrderInfo />} />
      <Route path={ROUTES.profile} element={<Profile />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
