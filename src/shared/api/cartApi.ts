import { createApi } from '@reduxjs/toolkit/query/react';
import { ICart, ICartCarQuantity } from 'shared/types';

import { baseQuery } from '.';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  tagTypes: ['Cart', 'QuantityInfo'],
  endpoints: (builder) => ({
    fetchCart: builder.query<ICart, number>({
      query: () => ({
        url: 'cart',
        method: 'GET',
      }),
      providesTags: ['Cart'],
    }),
    addToCart: builder.mutation<void, number>({
      query: (carId) => ({
        url: 'cart/add',
        body: carId,
        method: 'POST',
      }),
      invalidatesTags: ['QuantityInfo'],
    }),
    fetchCarQuantity: builder.query<ICartCarQuantity, number>({
      query: (carId) => ({
        url: `cart/quantity/${carId}`,
        method: 'GET',
      }),
      providesTags: ['QuantityInfo'],
    }),
  }),
});
