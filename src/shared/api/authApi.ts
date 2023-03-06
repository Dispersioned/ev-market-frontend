import { createApi } from '@reduxjs/toolkit/query/react';
import { ILoginUserData, IRegisterUserData, IUser } from 'shared/types';

import { baseQuery } from '.';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<{ user: IUser; token: string }, ILoginUserData>({
      query: (data) => ({
        url: 'auth/login',
        body: data,
        method: 'POST',
      }),
    }),
    register: builder.mutation<{ user: IUser; token: string }, IRegisterUserData>({
      query: (data) => ({
        url: `auth/register`,
        body: data,
        method: 'POST',
      }),
    }),
  }),
});
