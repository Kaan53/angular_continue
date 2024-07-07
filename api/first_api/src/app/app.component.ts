import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
    <!-- <input [(ngModel)]="model.title">
  <button (click)="save()">Kaydet</button> -->
  `,
})
export class AppComponent {
  model: {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
  } = {
    id: 0,
    title: '',
    completed: false,
    userId: 1,
  };

  constructor(
    //servicesiz kullanımı
    // private _http: HttpClient
    //service ile kullanımı
    private _app: AppService
  ) {
    //Get işlemi
    // this._http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(res => {
    //   console.log(res)
    // })
    // next: (res: any) => {
    //   console.log(res);
    // },
    // error: (err: HttpErrorResponse) => {
    //   console.log(err);
    // },
    // complete: () => {
    // }

    //Options Ekleme
    // let headers = {
    //   headers: {
    //     "authorization": "deger"
    //   }
    // }
    // this._http.get("https://jsonplaceholder.typicode.com/todos", headers).subscribe(res => {
    //   console.log(res)
    // })
    //2. tarz Options ekleme
    // this._http
    //   .get('https://jsonplaceholder.typicode.com/todos', {
    //     headers: { authorization: 'deger32' },
    //   })
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    //Service ile kullanımı
    _app.get((res) => {
      console.log(res)
    })
  }
  // save(){
  // Post işlemi
  //    this._http.post("https://jsonplaceholder.typicode.com/todos", this.model).subscribe(res=>
  //    {
  //     console.log(res);
  //    }
  //    )
  // }

  //Service ile kullanımı
  save(){
    this._app.add({userId:1, title:"Deneme", completed: false, id:0}, (res) => {
      console.log(res);
    })
  }
}
