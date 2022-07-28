import { Component, DoCheck } from '@angular/core';
import { IUserEntyty } from '../interfaces/user-entyty.interface';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {

  isAuth: boolean = false;
  currentUser: IUserEntyty;

  constructor(private authService: AuthServiceService) { }

  ngDoCheck(): void {
    this.isAuth = this.authService.isAuthenticated();
    let userData: string | null = localStorage.getItem('currentUser');
    let userDataParse: any = userData ? JSON.parse(userData) : ''
    if (userDataParse) {
      this.currentUser = userDataParse;
    }
  }

  onLogOutClick(): void {
    this.authService.logOut();
  }
}
