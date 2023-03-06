import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { useTypeSelector } from 'shared/hooks/redux';
import { IRole } from 'shared/types';

type RoleRouteProps = {
  roles?: IRole[];
};

export function RoleRoute({ roles }: RoleRouteProps) {
  const user = useTypeSelector((state) => state.viewer.user);

  if (roles && user && !roles.includes(user.role)) return <Navigate to={ROUTES.home} />;

  return <Outlet />;
}
