import { AuthForm } from 'components/auth/auth-form';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { useTypeSelector } from 'shared/hooks/redux';
import { Layout } from 'widgets/layout';

import { AuthFormWrapper } from './Auth.style';

type AuthProps = {
  type: 'login' | 'register';
};

export function Auth({ type }: AuthProps) {
  const user = useTypeSelector((state) => state.viewer.user);

  if (user) return <Navigate to={ROUTES.profile} />;

  return (
    <Layout>
      <AuthFormWrapper>
        <AuthForm type={type} />
      </AuthFormWrapper>
    </Layout>
  );
}
