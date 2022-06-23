import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() currentUser: string;
  @Output() logClick: EventEmitter<void> = new EventEmitter()

  isAuth: boolean = true;

  constructor(private authService: AuthServiceService) { }

  onLogClick(): void {
    this.logClick.emit()
    this.isAuth = this.authService.isAuthenticated()
  }

  logOutClick() {
    this.authService.logOut()
    this.isAuth = !this.isAuth
  }
}
