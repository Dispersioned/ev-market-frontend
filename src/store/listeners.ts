import { TypedStartListening, createListenerMiddleware } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'store';

export const listenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const startAppListening = listenerMiddleware.startListening as AppStartListening;
