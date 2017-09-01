import { combineReducers } from 'redux';
import githubReducer     from './githubReducer';
import searchTermReducer from './searchTermReducer';
import usersReducer      from './usersReducer';

export default combineReducers({
  github:       githubReducer,
  selectedUser: usersReducer,
  searchTerm:   searchTermReducer
});
