import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MasterPPageComponent } from "./master-ppage/master-ppage.component";

import { MatCommonModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginComponent, MasterPPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
