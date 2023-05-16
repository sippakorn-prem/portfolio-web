export interface RootState {
  scrollX: number;
  scrollY: number;
  innerHeight: number;
  innerWidth: number;
}

export interface UpdateStateAction {
  type: 'UPDATE_STATE';
  key: keyof RootState;
  value: unknown;
}
