import { styled } from '@mui/material';
import { COLORS } from 'shared/config/colors';

export const UIHeader = styled('header')`
  background-color: ${COLORS.primary};
`;

export const Content = styled('div')`
  display: grid;
  grid-template-columns: fit-content(100%) 1fr fit-content(100%) fit-content(100%);
  align-items: center;
  gap: 30px;
  padding: 10px 0;
`;

export const NavList = styled('ul')`
  list-style-type: none;
`;
