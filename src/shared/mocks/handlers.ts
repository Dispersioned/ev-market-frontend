/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { carMocks } from './car';
import { carsViewMock } from './carsView';
import { cartMock } from './cart';
import { userMock } from './user';

export const handlers = [
  rest.get('http://localhost:5000/car/all', (req, res, ctx) => {
    return res(ctx.json(carsViewMock));
  }),
  rest.get('http://localhost:5000/car/:id', (req, res, ctx) => {
    const carId = +req.params.id;

    const car = carMocks.find((c) => c.id === carId);

    if (!car) {
      return res((resp) => {
        resp.body = JSON.stringify({
          message: 'Lot not found',
        });
        resp.status = 404;
        return resp;
      });
    }

    return res(ctx.json(car));
  }),
  rest.post('http://localhost:5000/auth/login', (req, res, ctx) => {
    return res(
      ctx.json({
        token: 'user',
        user: userMock,
      })
    );
  }),
  rest.post('http://localhost:5000/auth/register', (req, res, ctx) => {
    return res(
      ctx.json({
        token: 'user',
        user: userMock,
      })
    );
  }),
  rest.post('http://localhost:5000/auth/me', (req, res, ctx) => {
    return res(ctx.json(userMock));
  }),
  rest.get('http://localhost:5000/cart', (req, res, ctx) => {
    return res(ctx.json(cartMock));
  }),
  rest.post('http://localhost:5000/cart/update', async (req, res, ctx) => {
    const body = await req.json();

    if (body.action === 'add') return res(ctx.json({ message: 'Added to cart' }));
    if (body.action === 'substract') return res(ctx.json({ message: 'Substracted from cart' }));

    return res((resp) => {
      resp.body = JSON.stringify({
        message: 'Action not recognized. It may by "add" or "substract" only',
      });
      resp.status = 404;
      return resp;
    });
  }),
  rest.get('http://localhost:5000/cart/quantity/:carId', (req, res, ctx) => {
    const carId = +req.params.carId;

    const cartItem = cartMock.items.find((item) => item.car.id === carId);

    if (!cartItem) {
      return res((resp) => {
        resp.body = JSON.stringify({
          message: 'Lot not in cart',
        });
        resp.status = 404;
        return resp;
      });
    }

    return res(
      ctx.json({
        quantity: cartItem.quantity,
      })
    );
  }),
];
