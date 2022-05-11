import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../services/auth-user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  constructor(private childLoggedIn: AuthUserService) {}
  canActivateChild() {
    if (this.childLoggedIn.isChildLoggedIn) {
      return true;
    } else return false;
  }
}
