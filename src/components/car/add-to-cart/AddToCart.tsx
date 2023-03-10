import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { cartApi } from 'shared/api/cartApi';
import { ROUTES } from 'shared/config/routes';
import { Flex } from 'shared/styles';

import { ChangeQuantity } from '../change-quantity';

type AddToCartProps = {
  carId: number;
  availableQuantity: number;
};

export function AddToCart({ carId, availableQuantity }: AddToCartProps) {
  const [changeQuantity, { isLoading }] = cartApi.useChangeQuantityMutation();
  const { data } = cartApi.useFetchCarQuantityQuery(carId);

  const onAdd = () => {
    changeQuantity({
      carId,
      action: 'add',
    });
  };

  if (!data) return null;

  return (
    <Flex col gap={15}>
      <Typography variant="h6">In stock: {availableQuantity}</Typography>
      {data.quantity > 0 ? (
        <Flex gap={15} alignItems="center">
          <ChangeQuantity carId={carId} quantity={data.quantity} availableQuantity={availableQuantity} />
          <Link to={ROUTES.cart}>
            <Button color="success" variant="contained">
              Go to cart
            </Button>
          </Link>
        </Flex>
      ) : (
        <Button onClick={onAdd} variant="contained" disabled={isLoading}>
          Add to cart
        </Button>
      )}
    </Flex>
  );
}
