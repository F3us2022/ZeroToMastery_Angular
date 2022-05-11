import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor() {}

  get isLoggedIn() {
    return true;
  }

  get isChildLoggedIn() {
    return true;
  }
}
