import { Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
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

export const NavItem = styled(Typography)`
  position: relative;
  color: #fff;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &::after {
    top: -5px;
  }

  &::before {
    bottom: -5px;
  }

  &:hover {
    &::before,
    &::after {
      width: 100%;
    }
  }
` as typeof Typography;
