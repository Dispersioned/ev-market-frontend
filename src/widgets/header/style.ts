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
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  padding: 0 10px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 0;
    width: 3px;
    border-radius: 1px;
    background-color: #fff;
    transition: all 0.3s ease;
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    left: 0;
  }

  &::before {
    right: 0;
  }

  &:hover {
    &::before,
    &::after {
      height: 60%;
    }
  }
` as typeof Typography;
