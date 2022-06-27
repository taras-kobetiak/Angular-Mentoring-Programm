import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/header/services/auth-service.service';
import { ILoginForm } from '../interfaces/login.form.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  @Output() onSubmitClick = new EventEmitter<ILoginForm>()

  userInfo: ILoginForm;
  email: string;
  password: string;

  constructor(private authService: AuthServiceService) { }

  onSubmit(form: NgForm): void {
    this.userInfo = form.value;
    this.authService.logIn(this.userInfo);
    this.onSubmitClick.emit(this.userInfo)
  }
}
