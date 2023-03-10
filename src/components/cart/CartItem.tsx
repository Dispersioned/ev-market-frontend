import { Button, Typography } from '@mui/material';
import { ChangeQuantity } from 'components/car/change-quantity';
import { Flex, GridArea } from 'shared/styles';
import { ICarView } from 'shared/types';

import { LotImg, LotLayout } from './CartItem.styles';

type CartItemProps = {
  car: ICarView;
  quantity: number;
};

export function CartItem({ car, quantity }: CartItemProps) {
  return (
    <LotLayout>
      <GridArea name="image">
        <LotImg src={car.imageUrl} alt={car.carName} />
      </GridArea>
      <GridArea name="name">
        <Typography variant="h5">{car.carName}</Typography>
      </GridArea>
      <GridArea name="quantity">
        {car.availableQuantity === 0 ? (
          <Flex col gap={10} alignItems="flex-end">
            <Typography variant="h6">Lot not available</Typography>
            <Button variant="contained" color="error">
              Remove from cart
            </Button>
          </Flex>
        ) : (
          <ChangeQuantity carId={car.id} quantity={quantity} availableQuantity={car.availableQuantity} />
        )}
      </GridArea>
    </LotLayout>
  );
}
