import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  increment,
  decrement
} from './redux';

const counts = createReducer(0, {
  [increment.type]: (state, action: PayloadAction<number>) => state + action.payload,
  [decrement.type]: (state, action: PayloadAction<number>) => state - action.payload
})

export default combineReducers({
  counts
});