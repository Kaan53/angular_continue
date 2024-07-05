import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from '../user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: UserModel[] = [];
  constructor(
    private store: Store<{users: UserModel[]}>
  ){
    this.store.select("users").subscribe(res=>{
      this.users = res;
    })
  }

}
