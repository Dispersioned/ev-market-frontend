import { Typography } from '@mui/material';
import { ROUTES } from 'shared/config/routes';

import { CarLink } from './CarNameLink.styles';

type CarNameLinkProps = {
  carId: number;
  name: string;
  disabled?: boolean;
};

export function CarNameLink({ carId, name, disabled }: CarNameLinkProps) {
  if (disabled)
    return (
      <Typography variant="h5" style={{ opacity: 0.85 }}>
        {name}
      </Typography>
    );

  return (
    <CarLink to={`${ROUTES.car}/${carId}`}>
      <Typography variant="h5">{name}</Typography>
    </CarLink>
  );
}
