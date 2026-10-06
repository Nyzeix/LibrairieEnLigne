import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../Book';

@Component({
    selector: 'app-book-card',
    imports: [RouterLink],
    templateUrl: './book-card.html',
    styleUrl: './book-card.css',
})
export class BookCard {
    readonly livre = input.required<Book>();
}