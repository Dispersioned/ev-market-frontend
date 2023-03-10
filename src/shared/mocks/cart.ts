import { ICart } from 'shared/types';

import { carsViewMock } from './carsView';

export const cartMock: ICart = {
  haveErrors: true,
  items: [
    {
      id: 1,
      car: carsViewMock.find((car) => car.id === 1)!,
      quantity: 3,
    },
    {
      id: 2,
      car: carsViewMock.find((car) => car.id === 2)!,
      quantity: 1,
    },
  ],
};
