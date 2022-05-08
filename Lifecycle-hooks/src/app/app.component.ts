import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data!: string;
  nameUI!: string;
  priceUI!: number;

  product: Product = new Product();

  constructor() {}

  ngOnInit(): void {}

  handleData(e: any) {
    this.data = e.target.value;
  }

  updateProduct<T>(e: T) {
    this.product.name = this.nameUI;
    this.product.price = this.priceUI;
  }
}
