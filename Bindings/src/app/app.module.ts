import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [AppComponent, BindingComponent, AgePipe],
  imports: [BrowserModule, FormsModule, NgbModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
