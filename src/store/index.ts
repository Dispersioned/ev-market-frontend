import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carApi } from 'shared/api/carApi';

import { listenerMiddleware } from './listeners';
import { viewer } from './slices/viewerSlice';

const rootReducer = combineReducers({
  viewer,
  [carApi.reducerPath]: carApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(carApi.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AC = (dispatch: AppDispatch, getState: AppStore['getState']) => void;
