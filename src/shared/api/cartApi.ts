import { createApi } from '@reduxjs/toolkit/query/react';
import { ICart, ICartCarQuantity } from 'shared/types';

import { baseQuery } from '.';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  endpoints: (builder) => ({
    fetchCart: builder.mutation<ICart, number>({
      query: () => ({
        url: 'cart',
        method: 'GET',
      }),
    }),
    addToCart: builder.mutation<void, number>({
      query: (carId) => ({
        url: 'cart/add',
        body: carId,
        method: 'POST',
      }),
    }),
    fetchCarQuantity: builder.query<ICartCarQuantity, number>({
      query: (carId) => ({
        url: `cart/quantity/${carId}`,
        method: 'GET',
      }),
    }),
  }),
});
