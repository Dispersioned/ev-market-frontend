// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { carViewMock } from './cars';

export const handlers = [
  rest.get('http://localhost:5000/car/all', (req, res, ctx) => {
    return res(ctx.json(carViewMock));
  }),
];
