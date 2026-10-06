import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'catalogue',
        loadComponent: () => import('./catalogue/catalogue').then(m => m.Catalogue)
    },
    {
        path: 'book/:id',
        loadComponent: () => import('./fiche/fiche').then(m => m.Fiche)
    }
];
