import * as api from '../api';
import {
  FETCH_GITHUB_USER_SUCCESS,
  FETCH_GITHUB_USER_LOADING,
  FETCH_GITHUB_USER_ERROR,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_LOADING,
  SET_SEARCH_TERM
} from './types';


export const fetchGithubUser = username => async dispatch => {
  dispatch({ type: FETCH_GITHUB_USER_LOADING, payload: username });
  try {
    const user = await api.fetchUser(username);
    dispatch({ type: FETCH_GITHUB_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: FETCH_GITHUB_USER_ERROR, error });
  }
};

export const getUser = username => async (dispatch, getState) => {
  dispatch({ type: GET_USER_LOADING, payload: username });

  if (!username) {
    return dispatch({ type: GET_USER_SUCCESS, payload: null });
  }

  if (!getState().github.users[username]) {
    await dispatch(fetchGithubUser(username));
  }

  const user = getState().github.users[username];
  return user
    ? dispatch({ type: GET_USER_SUCCESS, payload: user })
    : dispatch({ type: GET_USER_ERROR });

};

export const setSearchTerm = searchTerm => async dispatch => {
  dispatch({ type: SET_SEARCH_TERM, payload: searchTerm });
  dispatch(getUser(searchTerm));
};

