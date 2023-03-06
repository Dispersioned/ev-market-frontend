import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { useAction, useTypeSelector } from 'shared/hooks/redux';
import { Loading } from 'shared/ui/loading';
import { Layout } from 'widgets/layout';

type TokenValidatorProviderProps = React.PropsWithChildren;

export function TokenValidatorProvider({ children }: TokenValidatorProviderProps) {
  const navigate = useNavigate();

  const { user, isLoading, error } = useTypeSelector((state) => state.viewer);
  const { validateToken } = useAction();

  useEffect(() => {
    if (!user) validateToken();
  }, [user]);

  useEffect(() => {
    // TODO: должно редиректить только с незащищенных роутов
    if (error) navigate(ROUTES.home);
  }, [error]);

  if (isLoading)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return <div>{children}</div>;
}
