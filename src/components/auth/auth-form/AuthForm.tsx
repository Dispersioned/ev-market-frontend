import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { FormLayout } from './AuthForm.style';
import { LoginActionBtns } from './LoginActionBtns';
import { LoginFields } from './LoginFields';
import { RegisterActionBtns } from './RegisterActionBtns';
import { RegisterFields } from './RegisterFields';

type AuthFormProps = {
  type: 'login' | 'register';
};

export function AuthForm({ type }: AuthFormProps) {
  const { control, handleSubmit } = useForm();
  const onLogin = (data: any) => {};
  const onRegister = (data: any) => {};

  return (
    <FormLayout>
      <Typography variant="h3" textTransform="uppercase" fontWeight={500} align="center">
        {type === 'login' && 'Sign in'}
        {type === 'register' && 'Sign up'}
      </Typography>
      {type === 'login' && <LoginFields control={control} />}
      {type === 'register' && <RegisterFields control={control} />}

      {type === 'login' && <LoginActionBtns handleSubmit={handleSubmit} onSubmit={onLogin} />}
      {type === 'register' && <RegisterActionBtns handleSubmit={handleSubmit} onSubmit={onRegister} />}
    </FormLayout>
  );
}
