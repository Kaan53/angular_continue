import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template:`
  <nav>
    <a routerLink="./c1">Home</a>
    <a routerLink="./c2">About</a>
    <a routerLink="./c3">Contact</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
