import { Flex } from 'shared/styles';
import { ICart } from 'shared/types';

import { CartItem } from './CartItem';

type CartListProps = {
  cart: ICart;
};

export function CartList({ cart }: CartListProps) {
  return (
    <Flex col gap={15}>
      {cart.map((item) => (
        <CartItem key={item.id} car={item.car} quantity={item.quantity} />
      ))}
    </Flex>
  );
}
