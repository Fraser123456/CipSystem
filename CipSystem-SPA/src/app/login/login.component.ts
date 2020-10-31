import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
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
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private alertify: AlertifyService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(
        (next) => {
          this.alertify.success("Login Successful.");
          this.LoggedIn.emit(true);
          this.router.navigate(["home"]);
        },
        (error) => {
          this.alertify.error("Username or Password is incorrect");
        },
        () => {
          this.router.navigate(["home"]);
        }// {7}
      );
      this.formSubmitAttempt = true;             // {8}
  }
}
}
