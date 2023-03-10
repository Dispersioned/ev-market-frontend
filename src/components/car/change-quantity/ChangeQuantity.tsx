import { IconButton, Typography } from '@mui/material';
import addIcon from 'assets/icons/add.svg';
import substractIcon from 'assets/icons/substract.svg';
import { cartApi } from 'shared/api/cartApi';
import { Flex } from 'shared/styles';

import { ChangeQuantityIcon } from './ChangeQuantity.styles';

type ChangeQuantityProps = {
  carId: number;
  quantity: number;
  availableQuantity: number;
};

export function ChangeQuantity({ carId, quantity, availableQuantity }: ChangeQuantityProps) {
  const [changeQuantity, { isLoading }] = cartApi.useChangeQuantityMutation();

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

  const canSubstruct = quantity > 1;
  const canAdd = quantity < availableQuantity;

  return (
    <Flex gap={15} alignItems="center">
      <IconButton onClick={onSubstract} disabled={isLoading || !canSubstruct}>
        <ChangeQuantityIcon src={substractIcon} alt="substract from cart" disabled={!canSubstruct} />
      </IconButton>
      <Typography fontSize={22} fontWeight={500}>
        {quantity}
      </Typography>
      <IconButton onClick={onAdd} disabled={isLoading || !canAdd}>
        <ChangeQuantityIcon src={addIcon} alt="add to cart" disabled={!canAdd} />
      </IconButton>
    </Flex>
  );
}
