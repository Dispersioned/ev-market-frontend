'cars';

import { createApi } from '@reduxjs/toolkit/query/react';
import { ICarView } from 'shared/types';

import { baseQuery } from '.';

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery,
  endpoints: (builder) => ({
    fetchAllCars: builder.query<ICarView, void>({
      query: () => ({
        url: 'car',
      }),
    }),
  }),
});
