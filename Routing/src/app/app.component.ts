import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // username: string = 'Parent To Child';
  // childToParentData!: string;
  // parentMethod(e: any) {
  //   this.childToParentData = e;
  // }
}
