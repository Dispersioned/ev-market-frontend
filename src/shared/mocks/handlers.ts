/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { carMocks } from './car';
import { carsViewMock } from './carsView';
import { userMock } from './user';

export const handlers = [
  rest.get('http://localhost:5000/car/all', (req, res, ctx) => {
    return res(ctx.json(carsViewMock));
  }),
  rest.get('http://localhost:5000/car/:id', (req, res, ctx) => {
    const carId = +req.params.id;

    const car = carMocks.find((c) => c.id === carId);

    if (car) return res(ctx.json(car));

    return res((resp) => {
      resp.body = JSON.stringify({
        message: 'Lot not found',
      });
      resp.status = 404;
      return resp;
    });
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
];
