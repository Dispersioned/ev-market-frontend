import { Typography } from '@mui/material';
import { CarNameLink } from 'components/car/car-name-link';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { GridArea } from 'shared/styles';
import { ICarView } from 'shared/types';

import { CarImage, ItemLayout } from './styles';

type CarItemProps = {
  car: ICarView;
};

export function CarItem({ car }: CarItemProps) {
  return (
    <ItemLayout>
      <GridArea name="image">
        <Link to={`${ROUTES.car}/${car.id}`}>
          <CarImage src={car.imageUrl} alt={car.carName} />
        </Link>
      </GridArea>
      <GridArea name="name">
        <CarNameLink carId={car.id} name={car.carName} />
      </GridArea>
      <GridArea name="description">
        <Typography>
          Price:{' '}
          <Typography component="span" fontWeight={500}>
            $
            <Typography component="span" fontWeight={600}>
              {car.price}
            </Typography>
          </Typography>
        </Typography>
        <Typography>Range: {car.range} km</Typography>
        <Typography>Power: {car.range} kW</Typography>
        <Typography>Battery: {car.batteryCapacity} kW/h</Typography>
        <Typography>Acceleration time: {car.accelerationTime} sec/100 kmh</Typography>
        {car.mileage && <Typography>Mileage: {car.mileage} km</Typography>}
      </GridArea>
    </ItemLayout>
  );
}
