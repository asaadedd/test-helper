import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
import { testsReducer } from './app/modules/tests-list/store/tests.reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import createSagaMiddleware from '@redux-saga/core';
import { updateTestsEffect } from './app/modules/tests-list/store/tests.effects';
import { filterReducer } from './app/modules/tests-list/store/filter.reducer';

const combinedReducers = combineReducers({
  tests: testsReducer,
  filter: filterReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(updateTestsEffect);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
