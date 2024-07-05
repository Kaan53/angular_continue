import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
  <app-my-counter></app-my-counter>
  <h1>{{count$ | async}}</h1>
  `
})
export class AppComponent {  
  count$: Observable<number>;
  count: number = 0;

  constructor(
    private store: Store<{count: number}>
  ){
    this.count$ = this.store.select("count");
    this.store.select("count").subscribe(res=>{
      this.count = res;
    })
  }

}
