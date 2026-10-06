import { Component, computed, input, signal, inject } from '@angular/core';
import { BookCard } from '../book-card/book-card';
import { CartService } from '../services/cart-service';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-fiche',
  imports: [BookCard],
  templateUrl: './fiche.html',
  styleUrl: './fiche.css',
})
export class Fiche {
  readonly id = input.required<string>();
  protected readonly livres = inject(BookService).books;

  protected readonly livre = computed(() =>
    this.livres().find(l => l.id === Number(this.id())));

  protected readonly suggestions = computed(() =>
    this.livres().filter(l => l.id !== Number(this.id()))
      .slice(0, 4));

  protected readonly cart = inject(CartService);
  protected readonly ajoute = computed(() =>
    this.cart.items().some(item => item.livreId === Number(this.id())));
  protected ajouter() {
    this.cart.add(Number(this.id()));
  }
}

