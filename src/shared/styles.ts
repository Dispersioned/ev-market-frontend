import { styled } from '@mui/material';

export const GridArea = styled('div', { shouldForwardProp: (p) => p !== 'name' })<{ name: string }>`
  grid-area: ${(props) => props.name};
`;
