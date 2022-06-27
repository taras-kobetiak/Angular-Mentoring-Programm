import { Component } from '@angular/core';
import { AuthServiceService } from './header/services/auth-service.service';
import { ILoginForm } from './login-page/interfaces/login.form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  showLogIn = false;
  showAddCourseForm = false;
  user: string;

  constructor(private authService: AuthServiceService) { }

  logOutFunction(): void {
    this.showLogIn = !this.showLogIn;
  }

  submitClick(userInfo: ILoginForm) {
    this.authService.logIn(userInfo);
    this.user = this.authService.getUserInfo(userInfo);
    this.showLogIn = !this.showLogIn;
  }
}
