import { Button, Typography } from '@mui/material';
import { ChangeQuantity } from 'components/car/change-quantity';
import { Flex } from 'shared/styles';
import { ICarView } from 'shared/types';

type CartItemProps = {
  car: ICarView;
  quantity: number;
};

export function CartItem({ car, quantity }: CartItemProps) {
  return (
    <div>
        <ChangeQuantity carId={car.id} quantity={quantity} availableQuantity={car.availableQuantity} />
    </div>
  );
}
