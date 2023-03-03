import { AdminPanel } from 'pages/admin-panel';
import { Auth } from 'pages/auth';
import { Cart } from 'pages/cart';
import { Catalog } from 'pages/catalog';
import { Checkout } from 'pages/checkout';
import { Compare } from 'pages/compare';
import { Home } from 'pages/home';
import { OrderInfo } from 'pages/order-info';
import { Profile } from 'pages/profile';
import { Navigate, Route, Routes } from 'react-router-dom';

export function AppRouter() {
  return (
    <Routes>
      <Route path="admin" element={<AdminPanel />} />
      <Route path="auth" element={<Auth />} />
      <Route path="cart" element={<Cart />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="compare" element={<Compare />} />
      <Route index element={<Home />} />
      <Route path="order/:id" element={<OrderInfo />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
