import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginPageRoutingModule } from './login-page.routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  exports: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LoginPageRoutingModule,
    SharedModule
  ],
  bootstrap: []
})
export class LoginModule { }
