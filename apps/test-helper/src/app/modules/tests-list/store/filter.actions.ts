import { FilterStore } from './filter.interface';

export enum FilterActionsTypes {
  SET_FILTER = '[Filter] Set filter',
  RESET_FILTER = '[Filter] Reset filter'
}

export function setFilter(filter: FilterStore) {
  return {
    type: FilterActionsTypes.SET_FILTER,
    payload: filter
  };
}

export function resetFilter() {
  return {
    type: FilterActionsTypes.RESET_FILTER
  };
}
