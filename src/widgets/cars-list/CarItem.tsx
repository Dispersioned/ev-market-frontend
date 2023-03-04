import { Typography } from '@mui/material';
import { COLORS } from 'shared/config/colors';
import { ICarView } from 'shared/types';

import { CarDescription, CarImage, GridArea, ItemLayout } from './styles';

type CarItemProps = {
  car: ICarView;
};

export function CarItem({ car }: CarItemProps) {
  return (
    <ItemLayout>
      <GridArea name="image">
        <CarImage src={car.imageUrl} alt={car.name} />
      </GridArea>
      <GridArea name="name">
        <Typography variant="h5">{car.name}</Typography>
      </GridArea>
      <GridArea name="description">
        <CarDescription>
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
        </CarDescription>
      </GridArea>
    </ItemLayout>
  );
}
