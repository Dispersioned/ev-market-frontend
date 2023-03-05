import { TypedStartListening, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from 'shared/api/authApi';
import { TOKEN_KEY } from 'shared/config/storageKeys';
import { AppDispatch, RootState } from 'store';

import { viewerSlice } from './slices/viewerSlice';

export const listenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const startAppListening = listenerMiddleware.startListening as AppStartListening;

startAppListening({
  matcher: isAnyOf(authApi.endpoints.login.matchFulfilled, authApi.endpoints.register.matchFulfilled),
  effect: (action, listenerApi) => {
    localStorage.setItem(TOKEN_KEY, action.payload.token);
    listenerApi.dispatch(viewerSlice.actions.viewerLoaded(action.payload.user));
  },
});
