import { Button, Card, CardContent, Tooltip, Typography } from '@mui/material';
import { ICart } from 'shared/types';

import { CheckoutButton } from './CheckoutButton';

type CartSummaryProps = {
  cart: ICart;
};

export function CartSummary({ cart }: CartSummaryProps) {
  return (
    <Card>
      <CardContent>
        <CheckoutButton disabled={cart.haveErrors} selectedLotsId={[]} />
      </CardContent>
    </Card>
  );
}
