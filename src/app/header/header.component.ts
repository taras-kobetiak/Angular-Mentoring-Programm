import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() currentUser: string;
  @Input() isAuth: boolean;
  @Output() logOutClick: EventEmitter<void> = new EventEmitter()

  isLogClicked: boolean = true;

  onLoginClick(): void {
    this.isLogClicked = !this.isLogClicked;
  }

  onLogOutClick(): void {
    this.logOutClick.emit();
    this.isAuth = !this.isAuth;
  }
}
