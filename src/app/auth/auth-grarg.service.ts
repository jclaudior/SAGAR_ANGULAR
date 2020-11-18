import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(): boolean {
    if (localStorage['professor'] == null && localStorage['cordenador'] == null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
