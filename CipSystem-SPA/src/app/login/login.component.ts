import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { AlertifyService } from "../Services/alertify.service";
import { AuthService } from "../Services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @Output() LoggedIn: EventEmitter<boolean> = new EventEmitter();
  LoginForm: FormGroup;
  User: any[];

  constructor(
    fb: FormBuilder,
    private alertify: AlertifyService,
    private authService: AuthService,
    private router: Router
  ) {
    this.LoginForm = fb.group({
      Username: "",
      Password: "",
    });
  }

  ngOnInit() {}

  LoginUser() {
    const UserLogin = {
      Username: this.LoginForm.value.Username,
      Password: this.LoginForm.value.Password,
    };

    this.authService.login(UserLogin).subscribe(
      (next) => {
        this.alertify.success("Login Successful.");
        this.LoggedIn.emit(true);
        this.router.navigate(["Home"]);
      },
      (error) => {
        this.alertify.error("Username or Password is incorrect");
      },
      () => {
        this.router.navigate(["Home"]);
      }
    );
    console.log(this.LoginForm.value.Username);
    this.LoginForm.reset();
  }
}
