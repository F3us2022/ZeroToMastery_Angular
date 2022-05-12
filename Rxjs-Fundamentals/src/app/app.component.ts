import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {
    // const ob = new Observable((d) => d.next(Math.random()));
    // //subscriber1
    // ob.subscribe((data) => console.log(data));
    // //subscriber2
    // ob.subscribe((data) => console.log(data));
    //---------------------------------------------- SUBJECT AS DATA PRODUCER ----------------------------------------
    // const sub = new Subject();
    // //subscriber1
    // sub.subscribe((data) => console.log(data));
    // //subscriber1
    // sub.subscribe((data) => console.log(data));
    // sub.next(Math.random());
    //---------------------------------------------- SUBJECT AS DATA CONSUMER ----------------------------------------
    // const subData = new Subject();
    // const data = ajax('https://jsonplaceholder.typicode.com/users');
    // subData.subscribe((data) => console.log(data));
    // subData.subscribe((data) => console.log(data));
    // const result = data.subscribe(subData);

    //---------------------------------------- SUBJECT VS BEHAVIORAL SUBJECT ----------------------------------------

    const subData = new Subject();
    subData.subscribe((data) => console.log(data));
    subData.next(2020);
    subData.subscribe((data) => console.log(data));

    const behavSubData = new BehaviorSubject<number>(12);
    behavSubData.subscribe((data) => console.log(data));
    behavSubData.next(2022);
    behavSubData.subscribe((data) => console.log(data));
  }
}
