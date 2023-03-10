import { createApi } from '@reduxjs/toolkit/query/react';
import { ICart, ICartCarQuantity, IChangeQuantityData, ICheckoutData } from 'shared/types';

import { baseQuery } from '.';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  tagTypes: ['Cart', 'CarQuantity'],
  endpoints: (builder) => ({
    fetchCart: builder.query<ICart, void>({
      query: () => ({
        url: 'cart',
        method: 'GET',
      }),
      providesTags: ['Cart'],
    }),
    fetchCarQuantity: builder.query<ICartCarQuantity, number>({
      query: (carId) => ({
        url: `cart/quantity/${carId}`,
        method: 'GET',
      }),
      providesTags: ['CarQuantity'],
    }),
    changeQuantity: builder.mutation<void, IChangeQuantityData>({
      query: (data) => ({
        url: 'cart/update',
        body: data,
        method: 'POST',
      }),
      invalidatesTags: ['Cart', 'CarQuantity'],
    }),
    makeCheckout: builder.mutation<{ checkoutToken: string }, ICheckoutData>({
      query: (data) => ({
        url: 'cart/buy',
        body: data,
        method: 'POST',
      }),
      invalidatesTags: ['Cart', 'CarQuantity'],
    }),
  }),
});
