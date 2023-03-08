import { TextField } from '@mui/material';
import { Control, Controller, UseControllerProps } from 'react-hook-form';

type InputProps<T> = {
  control: T;
  label: string;
  name: string;
  defaultValue?: string;
  rules?: UseControllerProps['rules'];
  autoFocus?: boolean;
};

export function Input<ControlType extends Control<any, any>>({
  control,
  label,
  name,
  defaultValue = '',
  rules,
  autoFocus,
}: InputProps<ControlType>) {
  return (
    <Controller
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          autoFocus={autoFocus}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          label={label}
        />
      )}
      defaultValue={defaultValue}
      name={name}
      control={control}
      rules={rules}
    />
  );
}
