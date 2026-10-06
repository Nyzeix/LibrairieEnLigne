import { Component, computed, input, signal } from '@angular/core';
import { LIVRES } from '../livres';
import { BookCard } from '../book-card/book-card';

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

  protected readonly panier = signal<number[]>([]);
  protected readonly ajoute = computed(() =>
    this.panier().includes(Number(this.id())));
  protected ajouter() {
    this.panier.update(p => [...p, Number(this.id())]);
  }
}

