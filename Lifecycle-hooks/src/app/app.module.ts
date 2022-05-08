import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HooksChildComponent } from './hooks-child/hooks-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HooksChildComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
