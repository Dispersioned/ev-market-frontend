import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

type AuthFormProps = {
  type: 'login' | 'register';
};

export function AuthForm({ type }: AuthFormProps) {
  return (
    <>
      {type === 'login' && <LoginForm />}
      {type === 'register' && <RegisterForm />}
    </>
  );
}
