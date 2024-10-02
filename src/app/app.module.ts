import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { SurveyComponent } from './survey/survey.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { MatToolbarModule } from '@angular/material/toolbar';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientManagementComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
