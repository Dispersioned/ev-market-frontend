import { Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authApi } from 'shared/api/authApi';
import { ROUTES } from 'shared/config/routes';
import { ILoginFieldValues } from 'shared/types';
import { Input } from 'shared/ui/input';

import { FormLayout } from './AuthForm.style';

export function LoginForm() {
  const { control, handleSubmit, reset } = useForm<ILoginFieldValues>();

  const [login, { isLoading, isSuccess }] = authApi.useLoginMutation();

  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess]);

  const onSubmit = (data: ILoginFieldValues) => {
    login(data);
  };

  return (
    <FormLayout>
      <Typography variant="h3" textTransform="uppercase" fontWeight={500} align="center">
        Sign in
      </Typography>
      <Input label="Login" name="name" control={control} rules={{ required: true }} />
      <Input label="Password" name="password" control={control} rules={{ required: true }} />

      <Button type="submit" onClick={handleSubmit(onSubmit)} variant="contained" disabled={isLoading}>
        Log in
      </Button>
      <Typography>
        Don&apos;t have an account?&nbsp;
        <Link to={ROUTES.register}>Sign up</Link>
      </Typography>
    </FormLayout>
  );
}
