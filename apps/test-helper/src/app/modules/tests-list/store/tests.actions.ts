import { Test } from './tests.interface';

export enum TestsActionsTypes {
  UPDATE_TESTS = '[Tests] Update tests',
  SET_TESTS = '[Tests] Set tests'
}

export function updateTests() {
  return {
    type: TestsActionsTypes.UPDATE_TESTS
  };
}

export function setTests(tests: Test[]) {
  return {
    type: TestsActionsTypes.SET_TESTS,
    payload: tests
  };
}
