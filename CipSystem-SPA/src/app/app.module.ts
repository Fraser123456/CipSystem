import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule, Router} from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MasterPPageComponent } from "./master-ppage/master-ppage.component";
import { appRoutes } from "../app/Router";

import {AuthService} from '../app/Services/auth.service';
import {AuthGuard} from '../app/Services/AuthGuard.service';
import {HttpClientModule} from '@angular/common/http';

import { MatCommonModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { from } from 'rxjs';


@NgModule({
  declarations: [AppComponent, LoginComponent, MasterPPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
