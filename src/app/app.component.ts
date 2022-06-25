import { Component } from '@angular/core';
import { AuthServiceService } from './header/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  showLogIn = false;
  showAddCourseForm = false;
  user: any;

  constructor(private authService: AuthServiceService) { }

  logOutFunction(): void {
    this.showLogIn = !this.showLogIn;
  }

  submitClick(form: any): any {
    this.authService.logIn(form);
    this.user = this.authService.getUserInfo(form);
    this.showLogIn = !this.showLogIn;
  }
}
