import { Component, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from 'src/app/header/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  @Output() onSubmitClick = new EventEmitter<object>()

  constructor(private authService: AuthServiceService) { }

  onSubmit(form: any): void {
    this.authService.logIn(form);
    console.log('logged in');
    this.onSubmitClick.emit(form)
  }
}
