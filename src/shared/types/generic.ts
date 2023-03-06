import { IRole } from './user';

export type IRoute = {
  path: string;
  element: JSX.Element;
  roles?: IRole[];
};
