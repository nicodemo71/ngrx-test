import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
const initialState = 0;

// NOTE: pure function: non modifica lo stato in input e restituisce lo stato in output con valore in base al tipo di action.
export function counterReducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}
