import { Component } from '@angular/core';
import { AuthServiceService } from './header/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isAuth: boolean = false;
  showLogIn = false;
  showAddCourseForm = false;
  user: string;

  constructor(private authService: AuthServiceService) { }

  logOutFunction(): void {
    this.isAuth = !this.isAuth;
    this.showLogIn = !this.showLogIn;
    console.log(localStorage)
  }

  submitClick(form: any): void {
    this.authService.logIn(form);
    this.user = form.value.email;
    this.showLogIn = !this.showLogIn;
    this.isAuth = !this.isAuth;

    // this.authService.isAuthenticated(form.value.email);
  }
}
