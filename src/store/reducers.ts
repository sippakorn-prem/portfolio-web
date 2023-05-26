// reducers.ts

import { Reducer } from 'redux';
import { RootState, UpdateStateAction } from './store.interface';

const initialState: RootState = {
  scrollX: 0,
  scrollY: 0,
  innerHeight: 0,
  innerWidth: 0,
};

export const stateReducer: Reducer<RootState, UpdateStateAction> = (
  state = initialState,
  action
) => {
  if (!action.key) return state;
  return {
    ...state,
    [action.key]: action.value,
  };
};
