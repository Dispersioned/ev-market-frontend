import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

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

export const CarNameLink = styled(Link)`
  display: inline-block;
  position: relative;
  color: inherit;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 0;
    background-color: black;
    transition: all 0.3s ease-out;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;
