import { Routes } from '@angular/router';

export const routes: Routes = [
     // la ruta o path welcome, es el default
     {
        path: '', redirectTo: 'inicio', pathMatch: 'full',
    },
    {
        path: 'inicio',
        loadChildren: () => import('./pages/inicio/inicio.route').then((m) => m.routes)
    },
    {
        path: 'results',
        loadChildren: () => import('./pages/results/results.route').then((m) => m.routes)
    },
    {
        path: 'meal',
        loadChildren: () => import('./pages/meal-info-results/meal-info-results.route').then((m) => m.routes)
    },
    {
        path: 'categoria',
        loadChildren: () => import('./pages/categorias/categorias.route').then((m) => m.routes)
    },
    {
        path: 'ingredientes',
        loadChildren: () => import('./pages/ingredientes/ingredientes.route').then((m) => m.routes)
    },
    {
        path: '**', redirectTo: 'inicio', pathMatch: 'full',
    },
];
