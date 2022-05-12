import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((x) => x.ProductModule),
  },
];
@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, AboutComponent],
  imports: [BrowserModule, RouterModule.forRoot(route)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
