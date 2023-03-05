import { AuthForm } from 'components/auth/auth-form';
import { Layout } from 'widgets/layout';

import { AuthFormWrapper } from './Auth.style';

type AuthProps = {
  type: 'login' | 'register';
};

export function Auth({ type }: AuthProps) {
  return (
    <Layout>
      <AuthFormWrapper>
        <AuthForm type={type} />
      </AuthFormWrapper>
    </Layout>
  );
}
