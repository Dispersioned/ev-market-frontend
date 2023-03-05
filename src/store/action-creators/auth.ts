import { fetchMe } from 'shared/api';
import { TOKEN_KEY } from 'shared/config/storageKeys';
import { ILoginUserData } from 'shared/types/auth';
import { IUser } from 'shared/types/user';
import { AC } from 'store';
import { viewerSlice } from 'store/slices/viewerSlice';

export const validateToken: AC = () => async (dispatch) => {
  const { loadViewer, errorLoading, viewerLoaded } = viewerSlice.actions;
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    dispatch(errorLoading('invalid token'));
    return;
  }

  try {
    dispatch(loadViewer());
    const userLoaded = await fetchMe(token);
    dispatch(viewerLoaded(userLoaded));
  } catch (err: any) {
    dispatch(errorLoading(err.message));
  }
};

export const login: AC = (data: ILoginUserData) => async (dispatch) => {};

export const viewerLoaded: AC = (user: IUser, token: string) => async (dispatch) => {
  localStorage.setItem(TOKEN_KEY, token);
  dispatch(viewerSlice.actions.viewerLoaded(user));
};

export const logout: AC = () => async (dispatch) => {
  localStorage.removeItem(TOKEN_KEY);
  dispatch(viewerSlice.actions.logout());
};
