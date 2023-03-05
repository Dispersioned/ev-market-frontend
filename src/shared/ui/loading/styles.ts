import { styled } from '@mui/material';
import { COLORS } from 'shared/config/colors';

export const UILoading = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Spinner = styled('div')`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid ${COLORS.primary};
  border-top: 3px solid #ddd;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
