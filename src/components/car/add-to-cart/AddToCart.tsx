import { Button, IconButton, Typography } from '@mui/material';
import addIcon from 'assets/icons/add.svg';
import substractIcon from 'assets/icons/substract.svg';
import { Link } from 'react-router-dom';
import { cartApi } from 'shared/api/cartApi';
import { ROUTES } from 'shared/config/routes';
import { Flex } from 'shared/styles';

import { ChangeQuantityIcon } from './AddToCart.styles';

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

  const onSubstract = () => {
    changeQuantity({
      carId,
      action: 'substract',
    });
  };

  if (!data) return null;

  return (
    <Flex col gap={15}>
      <Typography variant="h6">In stock: {availableQuantity}</Typography>
      {data.quantity > 0 ? (
        <Flex gap={15} alignItems="center">
          <IconButton onClick={onSubstract}>
            <ChangeQuantityIcon src={substractIcon} alt="substract from cart" />
          </IconButton>
          <Typography fontSize={22} fontWeight={500}>
            {data.quantity}
          </Typography>
          <IconButton onClick={onAdd}>
            <ChangeQuantityIcon src={addIcon} alt="add to cart" />
          </IconButton>
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
