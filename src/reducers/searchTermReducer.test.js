import { SET_SEARCH_TERM } from '../actions/types';

import searchTermReducer from './searchTermReducer';

describe('searchTermReducer', () => {

  test('dispatch SET_SEARCH_TERM', () => {
    expect(
      searchTermReducer(
        {},
        {
          type: SET_SEARCH_TERM,
          payload: 'some text'
        }
      )
    ).toEqual(
      'some text'
    );
  });
});

