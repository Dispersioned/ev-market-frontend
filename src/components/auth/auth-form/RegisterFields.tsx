import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { Input } from 'shared/ui/input';

type RegisterFieldsProps = {
  control: Control<FieldValues, any>;
};

export function RegisterFields({ control }: RegisterFieldsProps) {
  return (
    <>
      <Input label="Login" name="name" control={control} rules={{ required: true }} />
      <Input label="Password" name="password" control={control} rules={{ required: true }} />
      <Input label="Repeat password" name="repeatPassword" control={control} rules={{ required: true }} />
      <Input label="Age" name="age" control={control} rules={{ required: true }} />
      <Input label="Address" name="address" control={control} rules={{ required: true }} />
    </>
  );
}
