import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        // Component Defaultsa
        loadComponent: () => import("./home/home.component")
        // Component Default Değilse
        // loadComponent: () => import("./home/home.component").then(c => c.HomeComponent)
    }
];
