import { Button, Tooltip, Typography } from '@mui/material';
import { cartApi } from 'shared/api/cartApi';

type CheckoutButtonProps = {
  disabled: boolean;
  selectedLotsId: number[];
};

export function CheckoutButton({ selectedLotsId, disabled }: CheckoutButtonProps) {
  const [makeCheckout, { isLoading }] = cartApi.useMakeCheckoutMutation();

  const onCheckout = () => {
    makeCheckout({ selectedLotsId });
  };

  if (disabled)
    return (
      <Tooltip title={<Typography color="#fff">Some lots aren&apos;t available</Typography>}>
        <span>
          <Button variant="contained" disabled>
            Checkout
          </Button>
        </span>
      </Tooltip>
    );

  return (
    <Button onClick={onCheckout} disabled={isLoading} variant="contained">
      Checkout
    </Button>
  );
}
