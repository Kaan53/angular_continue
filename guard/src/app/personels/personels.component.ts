import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-personels',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './personels.component.html',
  styleUrl: './personels.component.css'
})
export class PersonelsComponent {
  constructor(
    private router: Router
  ){}

  logout(){
    localStorage.clear();
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login")
  }


  home(){
    this.router.navigateByUrl("/")
  }

  about(){
    this.router.navigateByUrl("/about")
  }

  contact(){
    this.router.navigateByUrl("/contact")
  }

  personels(){
    this.router.navigateByUrl("/personels")
  }


}
