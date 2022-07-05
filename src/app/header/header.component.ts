import { Component, DoCheck } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {

  temporaryStartScreen: boolean = true;
  isAuth: boolean = false;
  currentUser: string | undefined;
  currentUserHello: string | undefined;

  constructor(private authService: AuthServiceService) { }


  ngDoCheck(): void {

    if (this.authService.getUserInfo()) {
      this.currentUser = this.authService.getUserInfo();
    }

    if (this.currentUser) {
      this.isAuth = this.authService.isAuthenticated();
      this.currentUserHello = `Hello, ${this.currentUser.split('@')[0]} `
    }
  }

  onLogOutClick(): void {
    this.authService.logOut();
    this.temporaryStartScreen = false;
  }
}
