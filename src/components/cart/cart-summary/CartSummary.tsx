import { ICart } from 'shared/types';

type CartSummaryProps = {
  cart: ICart;
};

export function CartSummary({ cart }: CartSummaryProps) {
  return <div>CartSummary</div>;
}
