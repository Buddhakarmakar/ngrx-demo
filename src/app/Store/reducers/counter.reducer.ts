import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  multiply,
  reset,
} from '../Actions/counter.action';

export const initialState = {
  counter: 0,
};
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(multiply, (state, { multiplyBy }) => {
    return { ...state, counter: state.counter * multiplyBy };
  }),
  on(reset, (state) => {
    return { ...state, counter: 0 };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
