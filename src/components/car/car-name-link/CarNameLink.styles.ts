import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const CarLink = styled(Link)`
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
