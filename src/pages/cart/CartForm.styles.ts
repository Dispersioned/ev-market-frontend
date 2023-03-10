import { styled } from '@mui/material';

export const FormLayout = styled('form')`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 300px);
  align-items: flex-start;
  gap: 20px;
`;