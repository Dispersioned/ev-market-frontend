import { IRole } from './user';

export type IRoute = {
  path: string;
  element: JSX.Element;
  allowedRoles?: IRole[];
};
