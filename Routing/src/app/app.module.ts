import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BindingComponent } from './users/binding.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgePipe } from './pipes/age.pipe';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: BindingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'userDetail/:id',
    component: UserDetailComponent,
    children: [
      { path: '', redirectTo: 'address', pathMatch: 'full' },
      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    AgePipe,
    ContactComponent,
    AboutComponent,
    UserDetailComponent,
    HomeComponent,
    AddressComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
