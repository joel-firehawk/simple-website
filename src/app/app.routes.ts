import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then((m) => m.Home);
        }
    },
    {
        path: 'users',
        loadComponent: () => {
            return import('./users/users').then((m) => m.Users);
        }
    },
    {
        path: 'add-user',
        loadComponent: () => {
            return import('./add-user/add-user').then((m) => m.AddUser);
        }
    }
];
