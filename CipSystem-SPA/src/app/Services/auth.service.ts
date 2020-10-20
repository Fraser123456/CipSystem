import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  baseUrl = environment.apiUrl + "auth/";
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  login(model: any) {
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((response: any) => {
        if (response) {
          this.loggedIn.next(true);
          this.router.navigate(['/']);
          localStorage.setItem("user", JSON.stringify(response.viewModel));
        }
      })
    );
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
