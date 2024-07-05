import { CanDeactivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const checkGuard: CanDeactivateFn<HomeComponent> = (component, currentRoute, currentState, nextState) => {
  var result = confirm("Sayfadan Çıkmak İstiyor Musunuz?")
  return result;
};
