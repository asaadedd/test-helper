import { TestsActionsTypes } from './tests.actions';
import { AnyAction } from 'redux';

export function testsReducer(state = [], actions: AnyAction) {
  if (actions.type === TestsActionsTypes.SET_TESTS) {
    return actions.payload.slice(0);
  } else {
    return state;
  }
}
