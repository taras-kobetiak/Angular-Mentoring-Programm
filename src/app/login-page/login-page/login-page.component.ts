import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/header/services/auth-service.service';
import { ILoginForm } from '../interfaces/login.form.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  userInfo: ILoginForm;

  constructor(private authService: AuthServiceService, private router: Router) { }

  onSubmit(form: NgForm): void {
    this.userInfo = form.value;
    this.authService.logIn(this.userInfo);
    this.router.navigate(['/courses'])
  }
}
