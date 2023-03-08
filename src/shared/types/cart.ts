import { ICarView } from './car';

export type ICartItem = {
  id: number;
  quantity: number;
  car: ICarView;
};

export type ICart = ICartItem[];

export type ICartCarQuantity = {
  quantity: number;
};
