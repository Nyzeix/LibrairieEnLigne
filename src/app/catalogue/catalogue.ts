import { Component, computed, signal, inject } from '@angular/core';
import { BookCard } from '../book-card/book-card';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-catalogue',
  imports: [BookCard],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  protected readonly livres = inject(BookService).books;
  protected readonly filtre = signal('');
  protected readonly resultats = computed(() =>
    this.livres().filter(l => l.auteur.toLowerCase()
      .includes(this.filtre().toLowerCase()))
  );
}
