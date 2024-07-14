import { RootState, UpdateStateAction } from './store.interface';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const updateState = (key: keyof RootState, value: any): UpdateStateAction => ({
	type: 'UPDATE_STATE',
	key,
	value,
});
