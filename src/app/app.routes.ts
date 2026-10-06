import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'catalogue'
    },

    {
        path: 'catalogue',
        loadComponent: () => import('./catalogue/catalogue').then(m => m.Catalogue)
    },
    {
        path: 'book/:id',
        loadComponent: () => import('./fiche/fiche').then(m => m.Fiche)
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart').then(m => m.Panier)
    },

    // Not Found
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)
    },
];
