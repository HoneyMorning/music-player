import { combineReducers } from '@reduxjs/toolkit';
import test from './testReducer';

const todoApp = combineReducers({
  test,
});

export default todoApp;
