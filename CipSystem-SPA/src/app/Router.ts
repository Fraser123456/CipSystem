import {Routes} from "@angular/router";

import {LoginComponent} from "../app/login/login.component";
import { MasterPPageComponent } from './master-ppage/master-ppage.component';

export const appRoutes: Routes = [
    {path: "Login", component: LoginComponent},
    {path: "Home", component: MasterPPageComponent}
]