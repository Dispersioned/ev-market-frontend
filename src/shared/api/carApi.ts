import { createApi } from '@reduxjs/toolkit/query/react';
import { ICar, ICarView } from 'shared/types';

import { baseQuery } from '.';

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery,
  endpoints: (builder) => ({
    fetchAllCars: builder.query<ICarView[], void>({
      query: () => ({
        url: 'car/all',
      }),
    }),
    fetchCarById: builder.query<ICar, number>({
      query: (id) => ({
        url: `car/${id}`,
      }),
    }),
  }),
});
