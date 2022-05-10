import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  exportUserData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
