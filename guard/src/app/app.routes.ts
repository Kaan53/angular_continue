import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { LayoutsComponent } from './layouts/layouts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonelsComponent } from './personels/personels.component';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { checkGuard } from './check.guard';

export const routes: Routes = [
    // {
    //     path: "",
    //     component: LayoutsComponent,
    //     children: [
    //         {
    //             path: "",
    //             canActivate: [authGuard],
    //             component: HomeComponent
    //         },
    //         {
    //             path: "about",
    //             canActivate: [authGuard],
    //             component: AboutComponent
    //         },
    //         {
    //             path: "contact",
    //             canActivate: [authGuard],
    //             component: ContactComponent
    //         },
    //         {
    //             path: "personels",
    //             canActivate: [authGuard],
    //             component: PersonelsComponent
    //         },
    //     ]
    // },
    {
        path: "",
        component: LayoutsComponent,
        canActivateChild: [() => inject(AuthService).isAuthenticated, authGuard],
        children: [
            {
                path: "",
                canDeactivate: [checkGuard],
                component: HomeComponent
            },
            {
                path: "about",
                component: AboutComponent
            },
            {
                path: "contact",
                component: ContactComponent
            },
            {
                path: "personels",
                component: PersonelsComponent
            },
        ]
    },
    {
        path: "login",
        component: LoginComponent
    }
];
