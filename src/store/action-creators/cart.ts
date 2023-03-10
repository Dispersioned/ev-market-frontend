import { fetchMe } from 'shared/api';
import { CART_SELECTED_LOTS_KEY, TOKEN_KEY } from 'shared/config/storageKeys';
import { ILoginUserData, IUser } from 'shared/types';
import { AC } from 'store';
import { cartSlice } from 'store/slices/cartSlice';
import { viewerSlice } from 'store/slices/viewerSlice';

export const selectLot: AC = (lotId: number) => async (dispatch) => {
  dispatch(cartSlice.actions.selectLot(lotId));
};

export const unselectLot: AC = (lotId: number) => async (dispatch) => {
  dispatch(cartSlice.actions.unselectLot(lotId));
};

export const loadLotsFromStorage: AC = () => async (dispatch) => {
  const lots = localStorage.getItem(CART_SELECTED_LOTS_KEY);

  localStorage.setItem(TOKEN_KEY, token);
  dispatch(viewerSlice.actions.viewerLoaded(user));
};

export const logout: AC = () => async (dispatch) => {
  localStorage.removeItem(TOKEN_KEY);
  dispatch(viewerSlice.actions.logout());
};
