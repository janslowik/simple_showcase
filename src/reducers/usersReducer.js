import {
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
  case GET_USER_SUCCESS:
    return action.payload;
  case GET_USER_ERROR:
    return null;
  default:
    return state;
  }
}
