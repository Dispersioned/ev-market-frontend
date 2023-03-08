import { Typography, styled } from '@mui/material';

export const NavList = styled('ul')`
  list-style-type: none;
`;

export const NavItem = styled(Typography)`
  position: relative;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  padding: 0 10px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 0;
    width: 2px;
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

  &:hover,
  &.active {
    &::before,
    &::after {
      height: 60%;
    }
  }
` as typeof Typography;
