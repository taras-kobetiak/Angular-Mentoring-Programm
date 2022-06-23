import { Component, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from 'src/app/header/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  @Output() onSubmitClick: EventEmitter<string> = new EventEmitter()

  user: string;

  constructor(private authService: AuthServiceService) { }

  onSubmit(form: any) {
    this.authService.logIn(form);
    console.log('logged in');
    this.onSubmitClick.emit(form.value.email)
  }

}
