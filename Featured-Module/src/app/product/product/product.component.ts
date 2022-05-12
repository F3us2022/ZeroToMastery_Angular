import { Component, OnInit } from '@angular/core';
import { filter, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private destroyObserv!: Subscription;
  constructor() {}

  ngOnInit(): void {
    //PROMISE
    const pr = new Promise((res) => {
      setTimeout(() => {
        res('Promise Resolved-1');
        res('Promise Resolved-2');
      }, 1000);
    });

    pr.then((data) => console.log(data));

    //OBSERVABLE
    const ob = new Observable((sub) => {
      // setTimeout(() => {
      //   sub.next('Observable Subscribed-1');
      //   sub.next('Observable Subscribed-2');
      // }, 1000);

      setInterval(() => {
        sub.next('Observable Subscribed-1');
      }, 1000);
    });

    // ob.pipe(filter((d) => d === 'Observable Subscribed-2')).subscribe((data) =>
    //   console.log(data)
    // );
    //ob.subscribe((data) => console.log(data));

    this.destroyObserv = ob.subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    this.destroyObserv.unsubscribe();
  }
}
