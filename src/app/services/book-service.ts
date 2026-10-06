import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { Book } from '../Book';

@Injectable({ providedIn: 'root' })
export class BookService {
  private readonly http = inject(HttpClient);

  readonly books = toSignal(
    this.http.get<Book[]>('/books.json').pipe(
      catchError(error => {
        console.error('Impossible de charger les livres', error);
        return of([]);
      })
    ),
    { initialValue: [] }
  );
}