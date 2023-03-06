import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

type ReduxProviderProps = PropsWithChildren;

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
