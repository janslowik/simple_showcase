import {
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from '../actions/types';

import usersReducer from './usersReducer';

describe('userReducer', () => {

  test('dispatch GET_USER_SUCCESS', () => {
    expect(
      usersReducer(
        {},
        {
          type: GET_USER_SUCCESS,
          payload: {
            login: 'some_login',
            avatar: 'some_avatar'
          }
        }
      )
    ).toEqual(
      {
        login: 'some_login',
        avatar: 'some_avatar'
      }
    );
  });

  test('dispatch GET_USER_ERROR', () => {
    expect(
      usersReducer(
        {},
        {
          type: GET_USER_ERROR
        }
      )
    ).toEqual(
      null
    );
  });
});
