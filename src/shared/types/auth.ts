import { IRole } from './user';

export type ILoginFieldValues = {
  name: string;
  password: string;
};

export type IRegisterFieldValues = {
  name: string;
  password: string;
  repeatPassword: string;
  role: IRole;
  age: number;
  // should be picked with map widget
  address: string;
};

export type ILoginUserData = {
  name: string;
  password: string;
};

export type IRegisterUserData = {
  name: string;
  password: string;
  role: IRole;
  age: number;
  address: string;
};
