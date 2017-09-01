import {
  FETCH_GITHUB_USER_ERROR,
  FETCH_GITHUB_USER_LOADING,
  FETCH_GITHUB_USER_SUCCESS
}   from '../actions/types';

import rootReducer from '.';

describe('rootReducer', () => {
  test('dispatch FETCH_GITHUB_USER_LOADING', () => {
    expect(
      rootReducer(
        {},
        {
          type: FETCH_GITHUB_USER_LOADING
        }
      )
    ).toEqual(
      {
        selectedUser: null,
        searchTerm: null,
        github: {
          users: {},
          isLoading: true
        }
      }
    );
  });

  test('dispatch FETCH_GITHUB_USER_SUCCESS', () => {
    expect(
      rootReducer(
        {
          github: {
            users: {
              some_user: {
                login: 'some_user',
                avatar: 'some_avatar'
              }
            },
            isLoading: true
          }
        },
        {
          type: FETCH_GITHUB_USER_SUCCESS,
          payload: {
            login: 'another_user',
            avatar: 'another_avatar'
          }
        }
      )
    ).toEqual(
      {
        selectedUser: null,
        searchTerm: null,
        github: {
          users: {
            some_user: {
              login: 'some_user',
              avatar: 'some_avatar'
            },
            another_user: {
              login: 'another_user',
              avatar: 'another_avatar'
            }
          },
          isLoading: false
        }
      }
    );
  });


  test('dispatch FETCH_GITHUB_USER_ERROR', () => {
    expect(
      rootReducer(
        {
          selectedUser: null,
          searchTerm: 'bazinga',
          github: {
            users: {
              some_user: {
                login: 'some_user',
                avatar: 'some_avatar'
              }
            },
            isLoading: true
          }
        },
        {
          type: FETCH_GITHUB_USER_ERROR
        }
      )
    ).toEqual(
      {
        selectedUser: null,
        searchTerm: 'bazinga',
        github: {
          users: {
            some_user: {
              login: 'some_user',
              avatar: 'some_avatar'
            }
          },
          isLoading: false
        }
      }
    );
  });

});
