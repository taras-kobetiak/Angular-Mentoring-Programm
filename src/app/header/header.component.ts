import { Component, Output, EventEmitter, Input, OnChanges, DoCheck } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges, DoCheck {

  @Input() currentUser: string;
  @Output() logOutClick: EventEmitter<void> = new EventEmitter()

  start: boolean = true;

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

  onLoginClick(): void { }

  onLogOutClick(): void {
    this.logOutClick.emit();
    this.authService.logOut();
    this.start = false;

  }
}
