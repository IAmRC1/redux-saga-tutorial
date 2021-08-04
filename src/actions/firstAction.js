import { INCREMENT, DECREMENT } from '../actionTypes/firstActionTypes'

export const increment = (data) => ({
  type: INCREMENT,
  payload: data
});

export const decrement = (data) => ({
  type: DECREMENT,
  payload: data
});
