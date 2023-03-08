import { createApi } from '@reduxjs/toolkit/query/react';
import { ICar, ICarView } from 'shared/types';

import { baseQuery } from '.';

export const carApi = createApi({
  reducerPath: 'carApi',
  tagTypes: ['Cars', 'CarInfo'],
  baseQuery,
  endpoints: (builder) => ({
    fetchAllCars: builder.query<ICarView[], void>({
      query: () => ({
        url: 'car/all',
      }),
      providesTags: ['Cars'],
    }),
    fetchCarById: builder.query<ICar, number>({
      query: (id) => ({
        url: `car/${id}`,
      }),
      providesTags: ['CarInfo'],
    }),
  }),
});
