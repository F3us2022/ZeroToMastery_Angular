import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';

const featureRoute: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, RouterModule.forChild(featureRoute)],
  exports: [],
})
export class ProductModule {
  constructor() {
    console.log('Product');
  }
}
