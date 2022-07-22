import { Component, DoCheck } from '@angular/core';
import { AuthServiceService } from './header/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements DoCheck {

  isAuth: boolean;

  constructor(private authService: AuthServiceService) { }

  ngDoCheck(): void {
    if (this.authService.getUserInfo().email) {
      this.isAuth = this.authService.isAuthenticated();
    }
  }
}