import { Component, Output, EventEmitter, Input, OnChanges, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnChanges, DoCheck {

  @Input() currentUser: string;
  @Output() logOutClick: EventEmitter<void> = new EventEmitter()

  temporaryStartScreen: boolean = true;
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
    this.temporaryStartScreen = false;
  }
}
