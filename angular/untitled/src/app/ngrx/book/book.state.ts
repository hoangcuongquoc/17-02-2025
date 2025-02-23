import { BookModel } from '../../models/book.model';

export interface BookState {
  listBooks: BookModel[];
  isFetchingListBooks: boolean;
  fetchedListBooksSuccess: boolean;
  fetchedListBooksError: any;
  book: BookModel | null;
}
