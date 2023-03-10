import { Button, Typography } from '@mui/material';
import { CarNameLink } from 'components/car/car-name-link';
import { ChangeQuantity } from 'components/car/change-quantity';
import { Flex, GridArea } from 'shared/styles';
import { ICarView } from 'shared/types';

import { LotImg, LotLayout } from './CartItem.styles';

type CartItemProps = {
  car: ICarView;
  quantity: number;
};

export function CartItem({ car, quantity }: CartItemProps) {
  const isAvailable = car.availableQuantity !== 0;

  return (
    <LotLayout>
      <GridArea name="image">
        <LotImg src={car.imageUrl} alt={car.carName} />
      </GridArea>
      <GridArea name="name">
        <CarNameLink carId={car.id} name={car.carName} />
      </GridArea>
      <GridArea name="quantity">
        {isAvailable ? (
          <ChangeQuantity carId={car.id} quantity={quantity} availableQuantity={car.availableQuantity} />
        ) : (
          <Flex col gap={10} alignItems="flex-end">
            <Typography variant="h6">Lot not available</Typography>
            <Button variant="contained" color="error">
              Remove from cart
            </Button>
          </Flex>
        )}
      </GridArea>
    </LotLayout>
  );
}
