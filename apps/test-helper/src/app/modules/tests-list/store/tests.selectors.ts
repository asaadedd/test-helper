import { Test } from './tests.interface';
import { StoreInterface } from '../../../store/store.interface';

export const selectAllTests = (store: StoreInterface): Test[] => {
  return store.tests;
};

export const selectOneTests = (id: string) => (store: StoreInterface): Test | undefined => {
  return store.tests.find((test: Test) => test.id === id);
};
