// reducers.ts

import { Reducer } from 'redux';
import { UserState, UserActionTypes, UPDATE_USER_NAME, UPDATE_USER_EMAIL } from './store.interface';

const initialUserState: UserState = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

export const userReducer: Reducer<UserState, UserActionTypes> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case UPDATE_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
