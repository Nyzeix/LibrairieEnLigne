import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../Book';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart-product',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-product.html',
  styleUrl: './cart-product.css',
})
export class CartProduct {
  readonly livre = input.required<Book>();
  readonly quantite = input.required<number>();

  private readonly cart = inject(CartService);

  protected readonly formateurPrix = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  });

  protected augmenter(): void {
    this.cart.add(this.livre().id);
  }

  protected diminuer(): void {
    this.cart.decrease(this.livre().id);
  }

  protected supprimer(): void {
    this.cart.remove(this.livre().id);
  }
}