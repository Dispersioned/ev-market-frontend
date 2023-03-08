import { createApi } from '@reduxjs/toolkit/query/react';
import { ICart, ICartCarQuantity, IChangeQuantityData } from 'shared/types';

import { baseQuery } from '.';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  tagTypes: ['Cart', 'QuantityInfo'],
  endpoints: (builder) => ({
    fetchCart: builder.query<ICart, void>({
      query: () => ({
        url: 'cart',
        method: 'GET',
      }),
      providesTags: ['Cart'],
    }),
    changeQuantity: builder.mutation<void, IChangeQuantityData>({
      query: (data) => ({
        url: 'cart/update',
        body: data,
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
