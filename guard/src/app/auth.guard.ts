import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const token : string | null = localStorage.getItem("token")
  const router = inject(Router)
  if(!token){
    router.navigateByUrl("/login")
    console.log("dönmedi")
    return false;
  }
  return true;
};
