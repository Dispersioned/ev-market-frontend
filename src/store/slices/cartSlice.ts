import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  selectedIds: number[];
}

const initialState: InitialState = {
  selectedIds: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    selectLot(state, action: PayloadAction<number>) {
      state.selectedIds.push(action.payload);
    },
    unselectLot(state, action: PayloadAction<number>) {
      state.selectedIds = state.selectedIds.filter((id) => id !== action.payload);
    },
    setSelectedLots(state, action: PayloadAction<number[]>) {
      state.selectedIds = action.payload;
    },
    clearSelectedLots(state) {
      state.selectedIds = [];
    },
  },
});

export const cart = cartSlice.reducer;
