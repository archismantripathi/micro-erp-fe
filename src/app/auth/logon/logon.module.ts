import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogonComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogonComponent
  ]
})
export class LogonModule { }
