import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() LoggedIn: EventEmitter<boolean> =   new EventEmitter();
  Username: string;
  Password: string;

  constructor() { }

  ngOnInit() {
  }

  Login() {
    if (this.Username == "Fraser" && this.Password == "12345"){
      this.LoggedIn.emit(true);
    }
  }

}
