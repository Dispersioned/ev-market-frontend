import { Navigate, Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from './AppRoutes';
import { RoleRoute } from './RoleRoute';

export function AppRouter() {
  return (
    <Routes>
      {APP_ROUTES.map((route) => (
        <Route key={route.path} element={<RoleRoute roles={route.roles} />}>
          <Route path={route.path} element={route.element} />
        </Route>
      ))}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
