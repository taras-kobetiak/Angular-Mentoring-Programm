import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  exports: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  bootstrap: []
})
export class LoginModule { }
