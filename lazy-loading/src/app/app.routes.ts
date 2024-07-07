import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"c1",
    loadChildren: () => import("./components/c1/c1.module").then(module => module.C1Module)
  },
  {
    path:"c2",
    loadChildren: () => import("./components/c2/c2.module").then(module => module.C2Module)
  },
  {
    path:"c3",
    loadChildren: () => import("./components/c3/c3.module").then(module => module.C3Module)
  },
];
