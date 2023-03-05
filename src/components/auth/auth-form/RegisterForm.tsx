import { Button, Typography } from '@mui/material';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authApi } from 'shared/api/authApi';
import { ROUTES } from 'shared/config/routes';
import { IRegisterFieldValues } from 'shared/types/auth';
import { Input } from 'shared/ui/input';

import { FormLayout } from './AuthForm.style';

export function RegisterForm() {
  const { control, handleSubmit } = useForm<IRegisterFieldValues>();

  const [register, { isLoading }] = authApi.useRegisterMutation();

  const onSubmit = (data: any) => {
    // register(data);
  };

  const genericControl = control as unknown as Control<FieldValues>;

  return (
    <FormLayout>
      <Typography variant="h3" textTransform="uppercase" fontWeight={500} align="center">
        Sign up
      </Typography>
      <Input label="Login" name="name" control={genericControl} rules={{ required: true }} />
      <Input label="Password" name="password" control={genericControl} rules={{ required: true }} />
      <Input label="Repeat password" name="repeatPassword" control={genericControl} rules={{ required: true }} />
      <Input label="Age" name="age" control={genericControl} rules={{ required: true }} />
      <Input label="Address" name="address" control={genericControl} rules={{ required: true }} />

      <Button type="submit" onClick={handleSubmit(onSubmit)} variant="contained" disabled={isLoading}>
        Register
      </Button>
      <Typography>
        Already have an account?&nbsp;
        <Link to={ROUTES.register}>Sign in</Link>
      </Typography>
    </FormLayout>
  );
}
