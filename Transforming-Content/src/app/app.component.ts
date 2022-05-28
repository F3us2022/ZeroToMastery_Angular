import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Transforming-Content';

  currentDate = new Date();
  currPipe = 230000;
  numPipe = 23.44;
  blueClass = false;
  fontSize = 3;
}
