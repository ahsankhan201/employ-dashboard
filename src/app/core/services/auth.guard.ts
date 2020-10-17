import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { User } from '../models/usermodel';
import { Roles } from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user: User = JSON.parse(localStorage.getItem('User'));
    if (user) {
      if (state.url === '/admin') {
        const isAdmin = user.role === Roles.Admin ? true : false;
        if (!isAdmin) {
          this.router.navigate(['/']);
        }
      }
      return true;
    }
    else {
      this.router.navigate(['/']);
    }
  }
}
