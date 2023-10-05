import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon.component';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    LoginComponent,
    LogonComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    LogonComponent
  ]
})
export class LogonModule { }
