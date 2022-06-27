import { Component, Output, EventEmitter, Input, OnChanges, DoCheck } from '@angular/core';
import { ILoginForm } from '../login-page/interfaces/login.form.interface';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges, DoCheck {

  @Input() currentUser: string;
  @Output() logOutClick: EventEmitter<void> = new EventEmitter()

  showLoginFormBeforeBEforeAuth: boolean = true;

  isAuth: boolean = false;
  isLogClicked: boolean = true;
  currentUserHello: string;

  constructor(private authService: AuthServiceService) { }

  ngDoCheck(): void {
    this.isAuth = this.authService.isAuthenticated(this.currentUser);
  }

  ngOnChanges(): void {
    if (this.currentUser) {
      this.currentUserHello = `Hello, ${this.currentUser.split('@')[0]}`
    }
  }

  onLogOutClick(): void {
    this.logOutClick.emit();
    this.authService.logOut();
    this.showLoginFormBeforeBEforeAuth = false;
  }
}
