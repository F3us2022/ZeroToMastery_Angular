import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: string | number): number {
    let currentYear: number = new Date().getFullYear();
    let userBirthYear: number = new Date(value).getFullYear();
    let userAge: number = currentYear - userBirthYear;
    return userAge;
  }
}
