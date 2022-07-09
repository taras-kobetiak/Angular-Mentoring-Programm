import { Component, DoCheck } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {

  isAuth: boolean = false;
  currentUser: string;
  currentUserName: string;

  constructor(private authService: AuthServiceService) { }

  ngDoCheck(): void {
    this.currentUser = this.authService.getUserInfo().email || 'noData'
    this.isAuth = this.authService.isAuthenticated();
    this.currentUserName = this.currentUser.split('@')[0]
  }

  onLogOutClick(): void {
    this.authService.logOut();
  }
}
