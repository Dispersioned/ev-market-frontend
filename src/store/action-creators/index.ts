import { AppDispatch, AppStore } from 'store';

export const actionCreators = {};

export type AC = (dispatch: AppDispatch, getState: AppStore['getState']) => void;
