import {
  FETCH_GITHUB_USER_ERROR,
  FETCH_GITHUB_USER_LOADING,
  FETCH_GITHUB_USER_SUCCESS
} from '../actions/types';

import { combineReducers } from 'redux';

const users = (state = {}, action) => {
  switch (action.type) {
  case FETCH_GITHUB_USER_SUCCESS:
    return {
      ...state,
      [action.payload.login]: action.payload
    };
  default:
    return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
  case FETCH_GITHUB_USER_LOADING:
    return true;
  case FETCH_GITHUB_USER_SUCCESS:
    return false;
  case FETCH_GITHUB_USER_ERROR:
    return false;
  default:
    return state;
  }
};

export default combineReducers({
  isLoading,
  users
});
