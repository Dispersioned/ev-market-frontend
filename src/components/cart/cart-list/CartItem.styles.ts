import { styled } from '@mui/material';

export const LotLayout = styled('div')`
  display: grid;
  grid-template:
    'select image name . quantity' fit-content(100%)
    '. image . . .' fit-content(100%) / fit-content(100%) fit-content(100%) 1fr fit-content(100%);
  gap: 15px;
`;

export const LotImg = styled('img')`
  max-height: 280px;
`;
