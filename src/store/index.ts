import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from 'shared/api/authApi';
import { carApi } from 'shared/api/carApi';
import { cartApi } from 'shared/api/cartApi';

import { listenerMiddleware } from './listeners';
import { viewer } from './slices/viewerSlice';

const rootReducer = combineReducers({
  viewer,
  [carApi.reducerPath]: carApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(listenerMiddleware.middleware)
        .concat(carApi.middleware, authApi.middleware, cartApi.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AC = (...args: any[]) => (dispatch: AppDispatch, getState: AppStore['getState']) => void;
