import { styled } from '@mui/material';

export const List = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemLayout = styled('div')`
  display: grid;
  grid-template: 'image name' fit-content(100%) 'image description' fit-content(100%) / fit-content(100%) 1fr;
  grid-gap: 0 20px;
`;

export const CarImage = styled('img')`
  max-height: 10rem;
`;
