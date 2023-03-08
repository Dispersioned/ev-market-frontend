import { styled } from '@mui/material';

export const GridArea = styled('div', { shouldForwardProp: (p) => p !== 'name' })<{ name: string }>`
  grid-area: ${(props) => props.name};
`;

export const Flex = styled('div', {
  shouldForwardProp: (p) => p !== 'col' && p !== 'gap' && p !== 'justifyContent' && p !== 'alignItems',
})<{
  col?: boolean;
  gap?: number;
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
}>`
  display: flex;
  flex-direction: ${(props) => (props.col ? 'column' : 'unset')};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => (props.gap ? `${props.gap}px` : 'unset')};
`;
