import { Routes } from "@angular/router";

import { LoginComponent } from "../app/login/login.component";
import { MasterPPageComponent } from "./master-ppage/master-ppage.component";
import { AuthGuard } from './Services/AuthGuard.service';

export const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: MasterPPageComponent, canActivate: [AuthGuard] },
  { path: "home", component: MasterPPageComponent, canActivate: [AuthGuard] },
];
