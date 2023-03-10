import { styled } from '@mui/material';
import { COLORS } from 'shared/config/colors';

export const UIHeader = styled('header')`
  background-color: ${COLORS.primary};
`;

export const Content = styled('div')`
  display: grid;
  grid-template-columns: fit-content(100%) 1fr repeat(3, fit-content(100%));
  align-items: center;
  gap: 30px;
  padding: 6px 0;
`;
