import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  work : string = "";
  @Output() addEvent = new EventEmitter<string>;
   add(){
    this.addEvent.emit(this.work)
    this.work="";
   }
}
