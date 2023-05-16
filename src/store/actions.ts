import { RootState, UpdateStateAction } from './store.interface';

export const updateState = (key: keyof RootState, value: unknown): UpdateStateAction => ({
  type: 'UPDATE_STATE',
  key,
  value,
});
