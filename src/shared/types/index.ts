import { IRole } from './user';

export * from './car';

export type IRoute = {
  path: string;
  element: JSX.Element;
  roles?: IRole[];
};
