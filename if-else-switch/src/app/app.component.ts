import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h1>Şart blogları</h1>
    @if(showFirstWord){
    <p style="color: {{ showFirstWord === true ? 'red' : '' }}">Birinci yazı {{ showFirstWord === true ? 'red' : '' }}</p>
    } @if(showSecondWord){
    <p style="color: green">İkinci yazı</p>
    }
    <hr />
    <button (click)="show(1)">Birinci yazıyı göster</button>
    <button (click)="show(2)">İkinci yazıyı göster</button>
  `,
})
export class AppComponent {
  showFirstWord: boolean = false;
  showSecondWord: boolean = false;

  show(num: number) {
    if (num === 1) {
      this.showFirstWord = true;
      this.showSecondWord = false;
    } else {
      this.showSecondWord = true;
      this.showFirstWord = false;
    }
  }
}
