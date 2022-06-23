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
  @Output() logClick: EventEmitter<void> = new EventEmitter()

  isLogClicked: boolean = false;

  constructor(private authService: AuthServiceService) { }

  onLogClick(): void {
    this.logClick.emit();
    this.isLogClicked != this.isLogClicked;
  }

  logOutClick() {
    this.authService.logOut()
  }
}
