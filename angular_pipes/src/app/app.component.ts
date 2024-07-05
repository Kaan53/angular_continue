import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrCurrencyPipe } from 'tr-currency';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TrCurrencyPipe],
  template: `
  <h1>{{name | uppercase}}</h1>
  <h1>{{ date | date:'dd.MMMM.yyy HH:mm:ss'}}</h1>
  <h1>{{num | currency:'TRY':'symbol-narrow':'1.2-2'}}</h1>
  <h1>{{num | trCurrency: '$': true}}</h1>

  `
})
export class AppComponent {
  name: string = "kaan Erdem"
  date : Date = new Date();
  num : number= 17002.88
}
