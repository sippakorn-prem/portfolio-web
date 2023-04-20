// actions.ts

import { UPDATE_USER_NAME, UPDATE_USER_EMAIL, UserActionTypes } from './store.interface';

export const updateUserName = (name: string): UserActionTypes => ({
  type: UPDATE_USER_NAME,
  payload: name,
});

export const updateUserEmail = (email: string): UserActionTypes => ({
  type: UPDATE_USER_EMAIL,
  payload: email,
});
