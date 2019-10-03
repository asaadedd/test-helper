import { Test } from '../modules/tests-list/store/tests.interface';
import { FilterStore } from '../modules/tests-list/store/filter.interface';

export interface StoreInterface {
  tests: Test[];
  filter: FilterStore;
}
