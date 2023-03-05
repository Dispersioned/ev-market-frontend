import { Button, Typography } from '@mui/material';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authApi } from 'shared/api/authApi';
import { ROUTES } from 'shared/config/routes';
import { ILoginFieldValues } from 'shared/types/auth';
import { Input } from 'shared/ui/input';

import { FormLayout } from './AuthForm.style';

export function LoginForm() {
  const { control, handleSubmit } = useForm<ILoginFieldValues>();

  const [login, { isLoading }] = authApi.useLoginMutation();

  const onSubmit = (data: ILoginFieldValues) => {
    login(data);
  };

  const genericControl = control as unknown as Control<FieldValues>;

  return (
    <FormLayout>
      <Typography variant="h3" textTransform="uppercase" fontWeight={500} align="center">
        Sign in
      </Typography>
      <Input label="Login" name="name" control={genericControl} rules={{ required: true }} />
      <Input label="Password" name="password" control={genericControl} rules={{ required: true }} />

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
