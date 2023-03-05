import { Button, Typography } from '@mui/material';
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

type LoginActionBtnsProps = {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: any) => void;
};

export function LoginActionBtns({ handleSubmit, onSubmit }: LoginActionBtnsProps) {
  return (
    <>
      <Button type="submit" onClick={handleSubmit(onSubmit)} variant="contained">
        Log in
      </Button>
      <Typography>
        Don&apos;t have an account?&nbsp;
        <Link to={ROUTES.register}>Sign up</Link>
      </Typography>
    </>
  );
}
