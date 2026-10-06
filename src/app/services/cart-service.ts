import { computed, effect, Injectable, signal } from '@angular/core';


interface item {
  livreId: number;
  quantite: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly cle = 'librairieenligne.panier.v1';
  public readonly items = signal<item[]>(this.load());

  constructor() {
    // Effet pour sauvegarder les items dans le LocalStorage à chaque mise à jour
    effect(() => {
      localStorage.setItem(this.cle, JSON.stringify(this.items()));
    });
  }

  add(livreId: number): void {
    this.items.update(items => {
      // Vérifie l'existence
      const existing = items.find(item => item.livreId === livreId);
      // Si l'article existe déjà, on l'incrémente, sinon on l'ajoute avec une quantité de 1
      return existing
        ? items.map(item =>
          item.livreId === livreId
            ? { ...item, quantite: item.quantite + 1 }
            : item
        )
        : [...items, { livreId, quantite: 1 }];
    });
  }

  decrease(livreId: number): void {
    this.items.update(items =>
      items.map(item =>
        item.livreId === livreId && item.quantite > 1
          ? { ...item, quantite: item.quantite - 1 }
          : item
      )
    );
  }

  remove(livreId: number): void {
    this.items.update(items => items.filter(item => item.livreId !== livreId));
  }

  private load(): item[] {
    // Check LocalStorage availability
    if (typeof localStorage === 'undefined') return [];

    // Récupère les données du LocalStorage, qui était associé à la clé
    try {
      const data: unknown = JSON.parse(localStorage.getItem(this.cle) ?? '[]');
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }
}