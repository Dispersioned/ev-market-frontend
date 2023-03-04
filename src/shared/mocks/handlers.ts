// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { carsViewMock } from './carsView';

export const handlers = [
  rest.get('http://localhost:5000/car/all', (req, res, ctx) => {
    return res(ctx.json(carsViewMock));
  }),
  rest.get('http://localhost:5000/car/:id', (req, res, ctx) => {
    return res(ctx.json(carsViewMock));
  }),
];
