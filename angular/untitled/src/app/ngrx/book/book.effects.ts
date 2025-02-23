import { inject } from '@angular/core';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// @ts-ignore
import * as BookActions from './book.actions';
import { BookServicesService } from '../../services/book/book.services.service';

export const bookEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const bookServicesService = inject(BookServicesService);
    return actions$.pipe(
      ofType(BookActions.fetchListBooks),
      mergeMap(() =>
        bookServicesService.getallbooks().pipe(
          map((books: any) => BookActions.fetchListBooksSuccess({ listBooks: books })),
          catchError((error) =>
            of(BookActions.fetchListBooksError({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);
