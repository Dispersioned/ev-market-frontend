import { styled } from '@mui/material';

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Gallery = styled('div')`
  display: flex;
  gap: 10px;
`;

export const CarImage = styled('img')`
  max-height: 350px;
`;

export const Info = styled('div')`
  display: grid;
  grid-template:
    'title subinfo' fit-content(100%)
    'graph price' fit-content(100%)
    'features price' fit-content(100%)
    'features .' fit-content(100%)
    'sellerStory location' fit-content(100%) / fit-content(100%) fit-content(100%);
  grid-gap: 15px;
`;

export const CarStats = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  gap: 10px;
`;
