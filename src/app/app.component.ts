import { Component } from '@angular/core';
import { AuthServiceService } from './header/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isAuth: boolean = true;
  showLogIn = false;
  user: string;

  constructor(private authService: AuthServiceService) { }



  logClick() {
    this.isAuth = this.authService.isAuthenticated()
    this.showLogIn = !this.showLogIn;
  }

  submitClick(email: string) {
    this.showLogIn = !this.showLogIn;
    this.user = email;
    this.isAuth = this.authService.isAuthenticated()
  }
}
