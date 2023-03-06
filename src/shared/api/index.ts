import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { IUser } from 'shared/types/user';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
});

export async function fetchMe(token: string): Promise<IUser> {
  const user = await fetch(`${process.env.API_URL}/auth/me`, {
    method: 'POST',
    body: JSON.stringify({
      token,
    }),
  }).then((res) => res.json());
  return user as unknown as IUser;
}
