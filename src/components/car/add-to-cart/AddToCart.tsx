import { Button, Typography } from '@mui/material';
import { cartApi } from 'shared/api/cartApi';
import { Flex } from 'shared/styles';

type AddToCartProps = {
  carId: number;
  availableQuantity: number;
};

export function AddToCart({ carId, availableQuantity }: AddToCartProps) {
  const [addToCart, { isLoading }] = cartApi.useAddToCartMutation();
  const { data } = cartApi.useFetchCarQuantityQuery(carId);

  const onAdd = () => {
    addToCart(carId);
  };

  if (!data) return null;

  return (
    <Flex col gap={15}>
      <Typography variant="h6">In stock: {availableQuantity}</Typography>
      {data.quantity > 0 ? (
        <Flex gap={20}>
          <div>substract</div>
          <div>{data.quantity}</div>
          <div>add</div>
        </Flex>
      ) : (
        <Button onClick={onAdd} variant="contained" disabled={isLoading}>
          Add to cart
        </Button>
      )}
    </Flex>
  );
}
