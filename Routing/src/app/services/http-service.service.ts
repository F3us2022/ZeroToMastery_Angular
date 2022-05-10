import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  //********------------------------------- WITHOUT TRY/CATCH HTTP SERVIES ---------------------------------------- */
  exportUserData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  //********--------------------------------- WITH TRY/CATCH HTTP SERVIES ----------------------------------------- */

  // exportUserData() {
  //   return this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .catch((error: HttpErrorResponse) => {
  //       return Observable.throw('error');
  //     });
  // }
}
