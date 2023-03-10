import { styled } from '@mui/material';

export const ChangeQuantityIcon = styled('img', { shouldForwardProp: (p) => p !== 'disabled' })<{ disabled: boolean }>`
  height: 40px;
  width: 40px;
  opacity: ${(props) => props.disabled && '0.5'};
`;
