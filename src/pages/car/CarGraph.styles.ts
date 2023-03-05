import { styled } from '@mui/material';

import { CarStat } from './CarStat';

export const UICarGraph = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
`;

export const CarImg = styled('img')`
  max-height: 85px;
`;

export const WeightStat = styled(CarStat)`
  position: absolute;
`;
