import { styled } from '@mui/material';

export const Content = styled('div')`
  display: grid;
  grid-template-columns: fit-content(100%) 1fr fit-content(100%) fit-content(100%);
  align-items: center;
  gap: 20px;
`;

export const NavList = styled('ul')`
  list-style-type: none;
`;
