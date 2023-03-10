import { CartList } from 'components/cart/cart-list';
import { CartSummary } from 'components/cart/cart-summary';
import { ICart } from 'shared/types';

import { FormLayout } from './CartForm.styles';

type CartFormProps = {
  cart: ICart;
};

export function CartForm({ cart }: CartFormProps) {
  // const onSubmit = (data) => {
  //   login(data);
  // };

  return (
    <FormLayout>
      <CartList cart={cart} />
      <CartSummary cart={cart} />
    </FormLayout>
  );
}
