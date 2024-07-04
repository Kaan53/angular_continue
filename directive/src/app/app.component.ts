import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColoritDirective } from './colorit.directive';
import { ValidateDirective } from './validate.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColoritDirective, ValidateDirective],
  template:`
  <!-- <h1 colorit="green" test="kaan">Directive</h1> -->
  <form>
    <input id="name" autocomplete="off" validate type="text" required minlength="3">
    <div></div>
    <button>Send</button>
  </form>
  `
})
export class AppComponent {
}
