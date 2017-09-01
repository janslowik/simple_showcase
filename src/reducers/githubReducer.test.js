import {
  FETCH_GITHUB_USER_ERROR,
  FETCH_GITHUB_USER_LOADING,
  FETCH_GITHUB_USER_SUCCESS
}   from '../actions/types';

import githubReducer from './githubReducer';

describe('githubReducer', () => {
  test('dispatch FETCH_GITHUB_USER_LOADING', () => {
    expect(
      githubReducer(
        {},
        {
          type: FETCH_GITHUB_USER_LOADING
        }
      )
    ).toEqual(
      {
        users: {},
        isLoading: true
      }
    );
  });

  test('dispatch FETCH_GITHUB_USER_SUCCESS', () => {
    expect(
      githubReducer(
        {
          users: {
            some_user: {
              login: 'some_user',
              avatar: 'some_avatar'
            }
          },
          isLoading: true
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
    );
  });


  test('dispatch FETCH_GITHUB_USER_ERROR', () => {
    expect(
      githubReducer(
        {
          users: {
            some_user: {
              login: 'some_user',
              avatar: 'some_avatar'
            }
          },
          isLoading: true
        },
        {
          type: FETCH_GITHUB_USER_ERROR,
          payload: {
            login: 'another_user',
            avatar: 'another_avatar'
          }
        }
      )
    ).toEqual(
      {
        users: {
          some_user: {
            login: 'some_user',
            avatar: 'some_avatar'
          }
        },
        isLoading: false
      }
    );
  });

});
