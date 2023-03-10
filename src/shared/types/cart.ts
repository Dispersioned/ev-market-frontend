import { ICarView } from './car';

export type ICartItem = {
  id: number;
  quantity: number;
  car: ICarView;
};

export type ICart = {
  haveErrors: boolean;
  items: ICartItem[];
};

export type ICartCarQuantity = {
  quantity: number;
};

export type IChangeQuantityData = {
  carId: number;
  action: 'add' | 'substract';
};
