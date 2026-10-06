import { Component, computed, input, signal, inject } from '@angular/core';
import { LIVRES } from '../livres';
import { BookCard } from '../book-card/book-card';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-fiche',
  imports: [BookCard],
  templateUrl: './fiche.html',
  styleUrl: './fiche.css',
})
export class Fiche {
  readonly id = input.required<string>();
  protected readonly livre = computed(() =>
    LIVRES.find(l => l.id === Number(this.id())));

  protected readonly suggestions = computed(() =>
    LIVRES.filter(l => l.id !== Number(this.id()))
      .slice(0, 4));

  protected readonly cart = inject(CartService);
  protected readonly ajoute = computed(() =>
    this.cart.items().some(item => item.livreId === Number(this.id())));
  protected ajouter() {
    this.cart.add(Number(this.id()));
  }
}

