import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cookie Consent Banner';
  value: Boolean;
  constructor() {}

  onOpen($event) {
    console.log($event);
  }
}
