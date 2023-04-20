export interface UserState {
  name: string;
  email: string;
}

export interface RootState {
  user: UserState;
}

export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL';

interface UpdateUserNameAction {
  type: typeof UPDATE_USER_NAME;
  payload: string;
}

interface UpdateUserEmailAction {
  type: typeof UPDATE_USER_EMAIL;
  payload: string;
}

export type UserActionTypes = UpdateUserNameAction | UpdateUserEmailAction;
