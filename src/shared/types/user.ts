export type IRole = 'User' | 'Admin';

export type IUser = {
  id: number;
  name: string;
  role: IRole;
  age: number;
  address: string;
};
