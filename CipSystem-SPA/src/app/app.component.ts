import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CipSystem-SPA';
  @Input() LoggedIn: boolean;

  Logged(LoggedIn){
    this.LoggedIn = LoggedIn;
  }

}
