import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h1>Döngüler</h1>
    <ul>
      @for(data of todos; track data) {
      <li>
        index: {{ $index }} || İlk Kayıt mı: {{ $first }} || Son Kayıt mı:
        {{ $last }} || Veri: {{ data.work }}
      </li>
      }
    </ul>
  `,
})
export class AppComponent {
  todos: { work: string; isCompleted: boolean }[] = [
    { work: 'Example1', isCompleted: true },
    { work: 'Example2', isCompleted: true },
    { work: 'Example3', isCompleted: true },
  ];

  constructor(){
    this.save()
  }

  save() {
    console.log("----------- For Döngüsü -----------");
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
    console.log("----------- Listeyi For ile dönme -----------");
    for (let i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].work);
    }
    console.log("----------- Listeyi ForEach ile dönme -----------");
    this.todos.forEach((val) => {
      console.log(val.work);
      console.log(val.isCompleted);
    });
    console.log("----------- Listeyi For of dönme -----------");
    for(let data of this.todos){
      //for of da async kodlama yapabiliyoruz
      console.log(data.work);
      console.log(data.isCompleted);
    }
    console.log("----------- Listeyi For in dönme -----------");

    for(let index in this.todos)
      {
        console.log(this.todos[index].work)
      }
  }
}

export class TodoModel {
  work: string = '';
  isCompleted: boolean = false;
}
