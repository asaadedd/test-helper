import { FilterStore } from './filter.interface';
import { AnyAction } from 'redux';
import { FilterActionsTypes } from './filter.actions';

export function filterReducer(store = {}, actions: AnyAction): FilterStore {
  switch (actions.type) {
    case FilterActionsTypes.SET_FILTER:
      return {...actions.payload};
    case FilterActionsTypes.RESET_FILTER:
      return {};
    default:
      return store;
  }
}
