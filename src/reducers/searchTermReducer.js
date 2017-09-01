import { SET_SEARCH_TERM } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
  case SET_SEARCH_TERM:
    return action.payload;
  default:
    return state;
  }
}
