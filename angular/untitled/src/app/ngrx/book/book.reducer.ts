import { createReducer, on } from '@ngrx/store';
import { BookState } from './book.state';

import * as bookActions from './book.action';

export const initialState: BookState = {
  listBooks: [],
  isFetchingListBooks: false,
  fetchedListBooksSuccess: false,
  fetchedListBooksError: '',
  book: null
};

export const bookReducer = createReducer(
  initialState,
  on(bookActions.fetchListBooks, state => {
    return {
      ...state,
      listBooks: [],
      isFetchingListBooks: true,
    };
  }),
  on(bookActions.fetchListBooksSuccess, (state, { listBooks }) => {
    return {
      ...state,
      listBooks: listBooks,
      isFetchingListBooks: false,
      fetchedListBooksSuccess: true,
    };
  }),
  on(bookActions.fetchListBooksError, (state, { error }) => {
    return {
      ...state,
      fetchedListBooksError: error.message,
      isFetchingListBooks: false,
    };
  })
);
