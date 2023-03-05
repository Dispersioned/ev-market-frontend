import { styled } from '@mui/material';

export const GridArea = styled('div', { shouldForwardProp: (p) => p !== 'name' })<{ name: string }>`
  grid-area: ${(props) => props.name};
`;

export const Flex = styled('div', { shouldForwardProp: (p) => p !== 'col' && p !== 'gap' })<{
  col?: boolean;
  gap?: number;
}>`
  display: flex;
  flex-direction: ${(props) => (props.col ? 'column' : 'unset')};
  gap: ${(props) => (props.gap ? `${props.gap}px` : 'unset')};
`;
