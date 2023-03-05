import { styled } from '@mui/material';
import { COLORS } from 'shared/config/colors';

export const GraphContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
`;

export const UICarGraph = styled('div')`
  display: grid;
  grid-template:
    'front car back' fit-content(100%)
    'front car back' fit-content(100%)
    '. bottom .' fit-content(100%) / fit-content(100%) 1fr fit-content(100%);
  align-items: center;
  grid-gap: 0 10px;
  font-weight: 500;
  color: ${COLORS.carBody};
`;

export const CarImg = styled('img')`
  max-height: 85px;
`;

export const BottomStats = styled('div')`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
