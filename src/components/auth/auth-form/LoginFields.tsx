import { Control, FieldValues } from 'react-hook-form';
import { Input } from 'shared/ui/input';

type LoginFieldsProps = {
  control: Control<FieldValues, any>;
};

export function LoginFields({ control }: LoginFieldsProps) {
  return (
    <>
      <Input label="Login" name="name" control={control} rules={{ required: true }} />
      <Input label="Password" name="password" control={control} rules={{ required: true }} />
    </>
  );
}
