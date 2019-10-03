import { setTests, TestsActionsTypes } from './tests.actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { Domains, Test, TestResults } from './tests.interface';

export function* updateTestsEffect() {
  yield takeEvery(TestsActionsTypes.UPDATE_TESTS, updateTests);
}

function* updateTests() {
  try {
    const tests: Test[] = yield call(axios.get, 'localhost:8000/api/v1/tests');
    yield put(setTests(tests));
  } catch (error) {
    const tests: Test[] = [
      {
        id: '1',
        reviewName: 'Update',
        jiraTask: 'WEBEM-20123',
        gerritReview: 'https://react-redux.js.org/api/hooks#usedispatch',
        description: 'Description',
        domain: Domains.DIAG,
        creationData: '',
        owner: {
          name: 'asaadedd',
          email: 'a',
        },
        tester: {
          name: 'gicu',
          email: '',
        },
        results: {
          status: TestResults.OPEN,
          description: '',
          fileNames: [],
          date: ''
        }
      },
      {
        id: '2',
        reviewName: 'Update 2',
        jiraTask: 'WEBEM-20124',
        gerritReview: 'https://react-redux.js.org/api/hooks#usedispatch',
        description: 'Description',
        domain: Domains.FM,
        creationData: '',
        owner: {
          name: 'asaadedd',
          email: 'a',
        },
        tester: {
          name: 'gicu',
          email: '',
        },
        results: {
          status: TestResults.FAILED,
          description: 'Fail reason',
          fileNames: [],
          date: ''
        }
      },
      {
        id: '2',
        reviewName: 'Update 3',
        jiraTask: 'WEBEM-20125',
        gerritReview: 'https://react-redux.js.org/api/hooks#usedispatch',
        description: 'Description',
        domain: Domains.PM,
        creationData: '',
        owner: {
          name: 'asaadedd',
          email: 'a',
        },
        tester: {
          name: 'gicu',
          email: '',
        },
        results: {
          status: TestResults.IN_PROGRESS,
          description: '',
          fileNames: [],
          date: ''
        }
      }
    ];
    yield put(setTests(tests));
  }
}
