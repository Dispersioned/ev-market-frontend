import { bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { actionCreators } from 'store/action-creators';

export const useTypeDispatch = () => useDispatch<AppDispatch>();
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAction = () => {
  const dispatch = useTypeDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
