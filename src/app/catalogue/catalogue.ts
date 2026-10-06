import { Component, computed, signal } from '@angular/core';
import { LIVRES } from '../livres';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-catalogue',
  imports: [BookCard],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  protected readonly livres = LIVRES;
  protected readonly filtre = signal('');
  protected readonly resultats = computed(() =>
    LIVRES.filter(l => l.auteur.toLowerCase()
      .includes(this.filtre().toLowerCase()))
  );
}
