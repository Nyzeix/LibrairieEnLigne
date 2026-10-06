import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart-service';
import { CartProduct } from './cart-product/cart-product';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-panier',
  imports: [CartProduct, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Panier {
  // Dépendance
  protected readonly cart = inject(CartService);
  protected readonly livres = inject(BookService).books;

  // Récupération des articles complets à partir de la liste d'ID obtenu depius la dépendance
  protected readonly articles = computed(() =>
    this.cart.items().flatMap(item => {
      const livre = this.livres().find(livre => livre.id === item.livreId);
      return livre ? [{ ...item, livre }] : [];
    })
  );

  protected readonly nombreArticles = computed(() =>
    this.articles().reduce((total, item) => total + item.quantite, 0)
  );

  protected readonly prixTotal = computed(() =>
    this.articles().reduce((total, item) => total + item.livre.prix * item.quantite, 0)
  );

  protected readonly formateurPrix = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  });
}
