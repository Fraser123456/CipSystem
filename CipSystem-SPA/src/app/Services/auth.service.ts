import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl + "auth/";

  login(model: any) {
    return this.http.post(this.baseUrl + "login", model).pipe(
      map((response: any) => {
        if (response) {
          console.log(response.viewModel);
          localStorage.setItem("user", JSON.stringify(response.viewModel));
        }
      })
    );
  }
}
