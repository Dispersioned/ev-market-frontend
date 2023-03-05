import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from 'shared/types/user';

interface InitialState {
  user: IUser | null;
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: InitialState = {
  user: null,
  isLoading: false,
  isError: false,
  error: '',
};

const viewerSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadViewer(state) {
      state.isLoading = true;
    },
    viewerLoaded(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.error = '';
    },
    errorLoading(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isError = false;
      state.error = '';
    },
  },
});

export const viewer = viewerSlice.reducer;
