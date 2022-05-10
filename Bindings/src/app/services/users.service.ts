import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getAllUsers() {
    return [
      {
        id: 101,
        name: 'John',
        city: 'MUMBAI',
        salary: 2000000,
        dob: new Date('05 / 10 / 1982'),
      },
      {
        id: 102,
        name: 'Peter',
        city: 'DELHI',
        salary: 1000000,
        dob: new Date('05 / 10 / 1982'),
      },
      {
        id: 103,
        name: 'Dan',
        city: 'BANGALORE',
        salary: 800000,
        dob: new Date('02 / 03 / 1985'),
      },
      {
        id: 104,
        name: 'keneth',
        city: 'PUNE',
        salary: 602200,
        dob: new Date('07 / 12 / 1979'),
      },
      {
        id: 105,
        name: 'Sam',
        city: 'CHANDIGARH',
        salary: 412000,
        dob: new Date('04 / 07 / 1986'),
      },
    ];
  }
}
