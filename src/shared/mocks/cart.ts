import { ICartItem } from 'shared/types';

import { carsViewMock } from './carsView';

export const cartMock: ICartItem[] = [
  {
    id: 1,
    car: carsViewMock.find((car) => car.id === 1)!,
    quantity: 2,
  },
  {
    id: 2,
    car: carsViewMock.find((car) => car.id === 2)!,
    quantity: 0,
  },
];
