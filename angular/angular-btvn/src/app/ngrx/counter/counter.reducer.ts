import { createAction, createReducer, on } from '@ngrx/store';

import * as CounterActions from './counter.actions';
import { CounterState } from './counter.state';

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,

  on(CounterActions.increase, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(CounterActions.decrease, (state) => {
    return {
      ...state,
      count: state.count - 1 < 0 ? 0 : state.count - 1,
    };
  }),
  on(CounterActions.reset, (state) => {
    return {
      ...state,
      count: 0,
    };
  }),
);
