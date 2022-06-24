import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() currentUser: string;
  @Input() isAuth: boolean;
  @Output() logClick: EventEmitter<void> = new EventEmitter()

  isLogClicked: boolean = true;

  constructor(private authService: AuthServiceService) { }

  onLogClick(): void {
    this.logClick.emit();
    this.isLogClicked = !this.isLogClicked;
  }

  logOutClick() {
    this.isLogClicked = !this.isLogClicked;
    this.authService.logOut()
  }
}
