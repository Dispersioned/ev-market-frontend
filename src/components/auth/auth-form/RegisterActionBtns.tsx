import { Button, Typography } from '@mui/material';
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

type RegisterActionBtnsProps = {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: any) => void;
};

export function RegisterActionBtns({ handleSubmit, onSubmit }: RegisterActionBtnsProps) {
  return (
    <>
      <Button type="submit" onClick={handleSubmit(onSubmit)} variant="contained">
        Register
      </Button>
      <Typography>
        Already have an account?&nbsp;
        <Link to={ROUTES.login}>Sign ip</Link>
      </Typography>
    </>
  );
}
